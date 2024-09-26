// App.js
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom'; // Use Routes for v6
import Login from './Components/Login/Login.js';
import Signup from './Components/Signup/Signup.js';
import './App.css'; // Import your global styles if needed

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
      </Routes>
    </div>
  );
};

export default App;
