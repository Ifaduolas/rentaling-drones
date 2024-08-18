import React from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration login here
   
  };

  const switchToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="register-container">
      <h2 className="title">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required/>
        </div>
       
        <button type="submit" className="register-button">Register</button>
      </form>
      <p className="switch-text">
        Already have an account?{' '}
        <span className="switch-link" onClick={switchToLogin}>
          Login here
        </span>.
      </p>
    </div>
  )
}

export default Register