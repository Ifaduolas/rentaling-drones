import React from "react"
import "./Login.css"
//import ForgotPassword from "./ForgotPassword"
import { useNavigate, Link } from "react-router-dom"

const Login = () => {
    const navigate =  useNavigate();

    

    const handleLogin = (event) => {
        event.preventDefault();
        
    };

    const switchToRegister = () => {
        navigate('/register');
    };

    return (
        <div className="login-container">
            <h2 className="title">Login</h2>
            <form className="login-form" onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                {/*** <ForgotPassword/>  */}
                <div className="forgot-password-link">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className="switch-text">
                Don't have account?{' '}
                <span className="switch-link" onClick={switchToRegister}>
                    Register here
                </span>.
            </p>
        </div>
    )
}

export default Login