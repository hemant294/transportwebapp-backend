// models/Booking.js

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  mobileNumber: {
    type: String, 
    required: true,
    trim: true
  },
  pickupLocation: {
    type: String,
    required: true,
    trim: true
  },
  dropLocation: {
    type: String,
    required: true,
    trim: true
  },
  vehicleType: {
    type: String,
    required: true,
    enum: ['Car', 'Bike', 'SUV', 'Bus', 'Van', 'Two Wheeler', 'Three Wheeler', 'Mini Truck', 'Medium Truck', 'Heavy Truck']
  },
  bookingDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending'
  },
  paymentId: {
    type: String,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  bookingPayment: {
    type: Number,
    required: true,
  }
  
});

module.exports = mongoose.model('Booking', bookingSchema);