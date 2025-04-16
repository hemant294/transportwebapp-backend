// seeder.js

const mongoose = require('mongoose');
const User = require('./models/User');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Connect to DB
mongoose.connect(process.env.MONGO_URI);

// Seed admin
const seedAdmin = async () => {
  try {
    // Clear existing admin
    await User.deleteMany({ role: 'admin' });

    await User.create({
      name: 'Admin User',
      email: process.env.ADMIN_EMAIL || 'admin@example.com',
      phone: '9999999999',
      password: process.env.ADMIN_PASSWORD || 'admin123',
      role: 'admin'
    });

    console.log('Admin user seeded successfully');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// Run seeder
seedAdmin();