const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const organizationRoutes = require('./routes/organizations');
require('./config/passport'); // Import the passport configuration

const app = express();

// Database connection
mongoose.connect('mongodb://127.0.0.1:27017/org-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());
app.use(passport.initialize());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/organizations', organizationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
