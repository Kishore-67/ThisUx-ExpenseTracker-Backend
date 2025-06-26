const express = require('express');
const router = express.Router();
const AuthController = require('../Controller/AuthController');
const verifyToken = require('../Middleware/AuthMiddleware');

router.post('/signup', AuthController.signup);
router.post('/signin', AuthController.signin);

// 🔐 Simple protected route
// router.get('/profile', verifyToken, (req, res) => {
//   res.status(200).json({ message: 'Access granted', userId: req.user.id });
// });

module.exports = router;
