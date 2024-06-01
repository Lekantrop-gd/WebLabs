const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room-controller');

router.get('/find/:id', roomController.getRoom);
router.get('/list', roomController.listRooms);
router.post('/create', roomController.createRoom);
router.put('/:id', roomController.updateRoom);
router.delete('/:id', roomController.deleteRoom);

module.exports = router;