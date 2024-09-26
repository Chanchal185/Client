import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div>
      <div className='box'>
        <form onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <div className='input-box'>
            <input 
              type='email' 
              placeholder='Email@gmail.com' 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className='input-box'>
            <input 
              type='password' 
              placeholder='Password' 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className='input-box'>
            <input 
              type='password' 
              placeholder='Confirm Password' 
              required 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </div>
          <div className='button'>
            <button type='submit'>Signup</button>
          </div>
          <div className='login-link'>
            <p>
              Already have an account? <Link to='/login'>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
