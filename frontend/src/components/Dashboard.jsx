import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dasboard.css'

function Dashboard() {
  const [organizations, setOrganizations] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };

      try {
        const orgResponse = await axios.get('http://localhost:5000/api/organizations', config);
        setOrganizations(orgResponse.data);

        const userResponse = await axios.get('http://localhost:5000/api/users', config);
        setUsers(userResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <h2>Organizations</h2>
      <ul className="organization-list">
        {organizations.map(org => (
          <li key={org._id}>{org.name}</li>
        ))}
      </ul>
      <h2>Users</h2>
      <ul className="user-list">
        {users.map(user => (
          <li key={user._id}>{user.username} - {user.role}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
