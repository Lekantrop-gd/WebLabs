const Room = require('../models/Room');
const fs = require('fs');
const path = require('path');

const deleteImages = (images) => {
    images.forEach(imagePath => {
        fs.unlink(path.join(__dirname, '..', imagePath), (err) => {
            if (err) {
                console.error('Error deleting image:', err);
            }
        });
    });
};

exports.getRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findById(id);
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }
        res.json(room);
    } catch (err) {
        res.status(500).json({ error: 'Failed to find room' });
    }
};

exports.listRooms = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const { type, places, keyword, sort } = req.query;

        let query = {};

        if (type && type !== 'all-types') {
            query.type = type;
        }

        if (places) {
            query.places = { $gte: parseInt(places) };
        }

        if (keyword) {
            const lowercasedKeyword = keyword.toLowerCase();
            query.$or = [
                { title: { $regex: lowercasedKeyword, $options: 'i' } },
                { amenities: { $regex: lowercasedKeyword, $options: 'i' } }
            ];
        }

        let roomsQuery = Room.find(query).skip(skip).limit(limit);

        if (sort === 'price-ascending') {
            roomsQuery = roomsQuery.sort({ price: 1 });
        } else if (sort === 'price-descending') {
            roomsQuery = roomsQuery.sort({ price: -1 });
        } else if (sort === 'places-ascending') {
            roomsQuery = roomsQuery.sort({ places: 1 });
        } else if (sort === 'places-descending') {
            roomsQuery = roomsQuery.sort({ places: -1 });
        }

        const rooms = await roomsQuery;
        const totalRooms = await Room.countDocuments(query);

        res.json({
            rooms,
            totalPages: Math.ceil(totalRooms / limit),
            currentPage: page,
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch rooms' });
    }
};

exports.createRoom = async (req, res) => {
    try {
        const roomData = req.body;
        const files = req.files;

        if (files) {
            roomData.images = files.map(file => file.path);
        }

        const room = new Room(roomData);
        await room.save();
        res.status(201).json(room);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create room' });
    }
};

exports.updateRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const roomData = req.body;
        const files = req.files;

        const room = await Room.findById(id);
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }

        if (files && files.length > 0) {
            deleteImages(room.images);
            roomData.images = files.map(file => file.path);
        }

        Object.assign(room, roomData);
        await room.save();

        res.json(room);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update room' });
    }
};

exports.deleteRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findByIdAndDelete(id);
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }

        deleteImages(room.images);

        res.json({ message: 'Room deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete room' });
    }
};
