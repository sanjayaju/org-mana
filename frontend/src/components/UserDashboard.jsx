import './UserDashboard.jsx'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const config = { headers: { Authorization: `Bearer ${token}` } };

    try {
      const response = await axios.get(`http://localhost:5000/api/users/${userId}`, config);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Dashboard</h1>
      <h2>Your Information</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Organization: {user.organization ? user.organization.name : 'Not Assigned'}</p>
    </div>
  );
}

export default UserDashboard;