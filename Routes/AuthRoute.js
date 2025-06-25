const express = require('express');
const router = express.Router();
const AuthController = require('../Controller/AuthController');

router.post('/signup', AuthController.signup);
router.post('/signin', AuthController.signin);

module.exports = router;
