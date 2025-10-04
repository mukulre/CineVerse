import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  return (
    <div className='login'>
      <img src={logo}  className='login-logo' alt="" />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button className='signup-btn'>Sign Up</button>
           <div className="options">
            <label>
              <input type="checkbox" className="remember-checkbox" />
              Remember Me
            </label>
            <a href="#">Need Help?</a>
            </div>
        </form>
        <div className="bottom-text">
          <p>New to Netflix? <a href='#'>Sign Up</a></p>
          <p>Already have an account? <a href='#'>Sign In</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login

