const Room = require('../models/Room');

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
        const rooms = await Room.find();
        res.json(rooms);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch rooms' });
    }
};

exports.createRoom = async (req, res) => {
    try {
        const room = new Room(req.body);
        await room.save();
        res.status(201).json(room);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create room' });
    }
};

exports.updateRoom = async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findByIdAndUpdate(id, req.body, { new: true });
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
        }
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
        res.json({ message: 'Room deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete room' });
    }
};