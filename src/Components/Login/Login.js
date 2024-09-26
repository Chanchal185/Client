import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <div className='box'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className='input-box'>
            <input type='email' placeholder='Email@gmail.com'  required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='button'>
            <button type='submit'>Login</button>
          </div>
          <div className='regester-link'>
            <p>
              Don't have an account? <Link to='/signup'>Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
