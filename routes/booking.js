// routes/booking.js

const express = require('express');
const router = express.Router();
const { 
  createBooking, 
  getUserBookings, 
  getBookingById,
  cancelBooking,
  updateBooking
} = require('../controllers/bookingController');
const { protect } = require('../middlewares/auth');

// Booking routes
router.post('/create', protect, createBooking);
router.get('/user', protect, getUserBookings);
router.get('/:id', protect, getBookingById);
router.put('/:id/cancel', protect, cancelBooking);
router.put('/:id/update', protect, updateBooking);

module.exports = router;