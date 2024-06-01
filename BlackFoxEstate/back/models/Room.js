const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    places: { type: Number, required: true },
    price: { type: Number, required: true },
    amenities: { type: [String], default: [] },
    images: { type: [String], default: [] }
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;