// routes/contact.js

const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contactController');

// Contact routes
router.post('/submit', submitContact);

module.exports = router;