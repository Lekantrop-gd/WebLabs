const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login-controller');

router.get('/check/:username', loginController.check);
router.post('/login', loginController.login);

module.exports = router;