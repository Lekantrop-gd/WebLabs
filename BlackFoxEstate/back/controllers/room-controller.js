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

        const rooms = await Room.find().skip(skip).limit(limit);
        const totalRooms = await Room.countDocuments();

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
