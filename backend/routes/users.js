// backend/routes/users.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const { isAdmin, isAuthenticated } = require('../middleware/auth');

// Registration route (no middleware for new user registration)
router.post('/register', userController.createUser);

// Other routes
router.get('/', isAdmin, userController.getUsers);
router.put('/:id', isAdmin, userController.updateUser);
router.post('/login', userController.login);
router.delete('/:id', isAdmin, userController.deleteUser);
router.post('/assign-organization', isAdmin, userController.assignOrganization);

module.exports = router;
