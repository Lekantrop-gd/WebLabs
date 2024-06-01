const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room-controller');
const upload = require('../upload-config');

router.get('/:id', roomController.getRoom);
router.get('/', roomController.listRooms);
router.post('/', upload.array('images', 5), roomController.createRoom);
router.put('/:id', upload.array('images', 5), roomController.updateRoom);
router.delete('/:id', roomController.deleteRoom);

module.exports = router;
