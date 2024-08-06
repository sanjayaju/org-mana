import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Login />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/dashboard" element={<Dashboard />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
