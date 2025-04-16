// controllers/contactController.js

const Contact = require('../models/Contact');

// @desc    Submit contact form
// @route   POST /api/contact/submit
// @access  Public
exports.submitContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Create contact query
    const contact = await Contact.create({
      name,
      email,
      phone,
      message
    });

    res.status(201).json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};