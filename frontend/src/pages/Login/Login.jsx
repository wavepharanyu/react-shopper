import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

const Login = () => {
  const [state, setState] = useState("Login")
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const login = async() => {
    event.preventDefault()
    let response = await axios.post("http://localhost:4000/api/user/login", formData)
    if(response.data.success){
      localStorage.setItem("auth-token", response.data.token)
      window.location.replace('/')
    }else{
        alert(response.data.message)
    }
  }

  const signup = async(event) => {
    event.preventDefault()
    let response = await axios.post("http://localhost:4000/api/user/signup", formData)
    if(response.data.success){
      localStorage.setItem("auth-token", response.data.token)
      window.location.replace('/')
    }else{
        alert(response.data.message)
    }
  }

  return (
    <div className="login">
      <div className="login-container">
        <h1>{state}</h1>
        <div className="login-fields">
          { state === "Sign Up" ? <input name="username" onChange={changeHandler} value={formData.username} type="text" placeholder="Your Name"/> : <></>}
          <input name="email" onChange={changeHandler} value={formData.email} type="email" placeholder="Email"/>
          <input name="password" onChange={changeHandler} value={formData.password} type="password" placeholder="Password"/>
        </div>
        <button onClick={(event) => {state === "Login" ? login(event) : signup(event)}}>Continue</button>
        { state === "Sign Up" 
          ? <p className="login-already">Already have an account? <span onClick={() => {setState("Login")}}>Login here</span></p>
          : <p className="login-already">Create an account? <span onClick={() => {setState("Sign Up")}}>Click here</span></p>
        }  
        <div className="login-agree">
          <input type="checkbox" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default Login