import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddOrganization() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const config = { headers: { Authorization: `Bearer ${token}` } };

    try {
      await axios.post('http://localhost:5000/api/organizations', { name, description }, config);
      alert('Organization added successfully');
      navigate('/admin-dashboard');
    } catch (error) {
      console.error('Error adding organization:', error);
      alert('Failed to add organization');
    }
  };

  return (
    <div className="add-organization-container">
      <h2>Add New Organization</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Organization Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add Organization</button>
      </form>
    </div>
  );
}

export default AddOrganization;
