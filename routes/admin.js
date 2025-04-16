// routes/admin.js

const express = require('express');
const router = express.Router();
const { 
  getAllBookings,
  updateBookingStatus,
  getAllContacts,
  updateContactStatus,
  getAllUsers
} = require('../controllers/adminController');
const { protect, admin } = require('../middlewares/auth');

// Apply protection to all admin routes
router.use(protect);
router.use(admin);

// Admin routes
router.get('/bookings', getAllBookings);
router.put('/bookings/:id', updateBookingStatus);
router.get('/contacts', getAllContacts);
router.put('/contacts/:id', updateContactStatus);
router.get('/users', getAllUsers);

module.exports = router;