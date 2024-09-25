import React from 'react'
import './Login.css';
const Login = () => {
  return (
    <div>
      <div className='box'>
        <form action=''>
          <h1>Login</h1>
          <div className='input-box'>
            <input type='email' placeholder='Email@gmail.com' required></input>
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Password' required></input>
          </div>
          <div className='rember-forgot'>
          <label><input type='checkbox'></input> Remember me</label>
          <a href='#'> Forgot Password?</a>
          </div>
          <div className='button'>
          <button type='submit'>Login</button>
          </div>
          <div className='regester-link'>
            <p>Don't have an account? <a href='#'>Register</a> </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login ;