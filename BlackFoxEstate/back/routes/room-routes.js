const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room-controller');
const upload = require('../upload-config');

router.get('/find/:id', roomController.getRoom);
router.get('/list', roomController.listRooms);
router.post('/create', upload.array('files', 5), roomController.createRoom);
router.put('/update/:id', upload.array('files', 5), roomController.updateRoom);
router.delete('/delete/:id', roomController.deleteRoom);

module.exports = router;