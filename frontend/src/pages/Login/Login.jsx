import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
        </div>
        <button>Continue</button>
        <p className="login-already">Already have an account? <span>Login here</span></p>
        <div className="login-agree">
          <input type="checkbox" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login