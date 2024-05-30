const express = require('express');
const router = express.Router();
const authController = require('../controllers/authorization-controller');

router.get('/check/:username', authController.check);
router.post('/login', authController.login);

module.exports = router;