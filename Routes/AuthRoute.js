const express = require('express');
const router = express.Router();
const AuthController = require('../Controller/AuthController');

router.post('/', AuthController.signup);
router.post('/', AuthController.signin);

module.exports = router;
