const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();

// Middleware
app.use(express.json());
app.use(passport.initialize());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/org-management', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
// const organizationsRouter = require('./routes/organizations');
// const usersRouter = require('./routes/users');

// app.use('/api/organizations', organizationsRouter);
// app.use('/api/users', usersRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
