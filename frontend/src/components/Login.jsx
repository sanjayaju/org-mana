import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { username, password };
    console.log('Payload:', payload); // Log the payload

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', payload);
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Error logging in:', error.response.data); // Log the error response
    }
  };

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
        <p>
          Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
