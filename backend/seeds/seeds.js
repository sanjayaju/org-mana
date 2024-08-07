const mongoose = require('mongoose');
const Organization = require('../models/organization');
const User = require('../models/user');

// Use 127.0.0.1 instead of localhost
const mongoURI = 'mongodb://127.0.0.1:27017/org-management';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

async function seedDatabase() {
  try {
    // Clear existing data
    await Organization.deleteMany({});
    await User.deleteMany({});

    // Create organizations
    const org1 = await Organization.create({ name: 'Organization 1', description: 'First organization' });
    const org2 = await Organization.create({ name: 'Organization 2', description: 'Second organization' });

    // Create users
    await User.create([
      { username: 'admin1', password: 'password123', email: 'admin1@example.com', role: 'admin', organization: org1._id },
      { username: 'user1', password: 'password123', email: 'user1@example.com', role: 'user', organization: org1._id },
      { username: 'user2', password: 'password123', email: 'user2@example.com', role: 'user', organization: org2._id },
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedDatabase();
