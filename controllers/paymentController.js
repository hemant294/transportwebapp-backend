// controllers/paymentController.js

const Booking = require('../models/Booking');

// @desc    Process payment checkout (dummy)
// @route   POST /api/payment/checkout
// @access  Private
exports.processPayment = async (req, res) => {
  try {
    const { bookingId, amount } = req.body;

    // Find booking
    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Check if booking belongs to user
    if (booking.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to pay for this booking'
      });
    }

    // Dummy payment processing
    // In a real scenario, we would integrate with Razorpay/Stripe here
    const paymentSuccessful = Math.random() > 0.2; // 80% success rate for testing

    if (paymentSuccessful) {
      // Generate a dummy payment ID
      const paymentId = 'pay_' + Math.random().toString(36).substring(2, 15);
      
      // Update booking payment status
      booking.paymentStatus = 'paid';
      booking.paymentId = paymentId;
      await booking.save();

      res.status(200).json({
        success: true,
        message: 'Payment successful',
        paymentId,
        booking
      });
    } else {
      booking.paymentStatus = 'failed';
      await booking.save();
      
      res.status(400).json({
        success: false,
        message: 'Payment failed, please try again',
        booking
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// @desc    Verify payment status
// @route   GET /api/payment/status/:bookingId
// @access  Private
exports.getPaymentStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.bookingId);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Check if booking belongs to user
    if (booking.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access payment information'
      });
    }

    res.status(200).json({
      success: true,
      paymentStatus: booking.paymentStatus,
      paymentId: booking.paymentId
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};