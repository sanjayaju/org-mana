const express = require('express');
const router = express.Router();
const organizationsController = require('../controllers/organizationsController');

router.post('/', organizationsController.createOrganization);
router.get('/', organizationsController.getOrganizations);
router.put('/:id', organizationsController.updateOrganization);
router.delete('/:id', organizationsController.deleteOrganization);

module.exports = router;
