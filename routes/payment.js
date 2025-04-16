// routes/payment.js

const express = require('express');
const router = express.Router();
const {
  processPayment,
  getPaymentStatus
} = require('../controllers/paymentController');
const { protect } = require('../middlewares/auth');

// Payment routes
router.post('/checkout', protect, processPayment);
router.get('/status/:bookingId', protect, getPaymentStatus);

module.exports = router;