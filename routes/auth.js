// routes/auth.js

const express = require('express');
const router = express.Router();
const { signup, login, getMe } = require('../controllers/authController');
const { protect } = require('../middlewares/auth');

// Register & login routes
router.post('/signup', signup);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;