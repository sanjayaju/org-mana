const Organization = require('../models/organization');

exports.createOrganization = async (req, res) => {
  try {
    const organization = new Organization(req.body);
    await organization.save();
    res.status(201).json(organization);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getOrganizations = async (req, res) => {
  try {
    const organizations = await Organization.find();
    res.json(organizations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateOrganization = async (req, res) => {
  try {
    const organization = await Organization.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(organization);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteOrganization = async (req, res) => {
  try {
    await Organization.findByIdAndDelete(req.params.id);
    res.json({ message: 'Organization deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
