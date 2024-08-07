import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsersAndOrganizations = async () => {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      try {
        const [usersRes, orgsRes] = await Promise.all([
          axios.get('http://localhost:5000/api/users', config),
          axios.get('http://localhost:5000/api/organizations', config)
        ]);
        setUsers(usersRes.data);
        setOrganizations(orgsRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUsersAndOrganizations();
  }, []);

  const handleAssignOrganization = async () => {
    const token = localStorage.getItem('token');
    const config = { headers: { Authorization: `Bearer ${token}` } };
    try {
      await axios.post('http://localhost:5000/api/users/assign-organization', { userId: selectedUser, organizationId: selectedOrg }, config);
      alert('Organization assigned successfully');
      navigate('/admin-dashboard');
    } catch (error) {
      console.error('Error assigning organization:', error);
      alert('Failed to assign organization');
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Assign Organization</h3>
        <select onChange={(e) => setSelectedUser(e.target.value)} value={selectedUser}>
          <option value="">Select User</option>
          {users.map(user => (
            <option key={user._id} value={user._id}>{user.username}</option>
          ))}
        </select>
        <select onChange={(e) => setSelectedOrg(e.target.value)} value={selectedOrg}>
          <option value="">Select Organization</option>
          {organizations.map(org => (
            <option key={org._id} value={org._id}>{org.name}</option>
          ))}
        </select>
        <button onClick={handleAssignOrganization}>Assign</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
