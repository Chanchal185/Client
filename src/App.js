import React, { Profiler } from 'react';
import { Route, Routes, Link } from 'react-router-dom'; 
import Login from './Components/Login/Login.js';
import Signup from './Components/Signup/Signup.js';
import Profile from './Components/Profile/Profile.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to Our App!</h1>
      <p>
        <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link>
      </p>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
