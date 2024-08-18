import React, { useState } from "react";
import { Link } from "react-router-dom";
import R from "../image/R.png"
import "./Navbar.css"
import { GrClose } from "react-icons/gr";
import { HiOutlineMenu } from "react-icons/hi";


 function Header() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  

  return (
   
      
    
      <nav className="navbar">
        <div className="navbar-container">
          <Link  to="/" className="navbar-logo">
            <img src={R} alt=""/>
          </Link>

          <ul className={click ? "navbar-menu active" : "navbar-menu"}>
            <li className="navbar-item">
              <Link to="/" activeclassname="active" className="navbar-links"  onClick={handleClick}>Home</Link>
            </li>
            
            
            <li className="navbar-item">
              <Link to="/admin" activeclassname="active" className="navbar-links" onClick={handleClick}>Admin</Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" activeclassname="active" className="navbar-links" onClick={handleClick} >Login</Link>
            </li>
            <li className="navbar-item">
              <Link to="/register" activeclassname="active" className="navbar-links" onClick={handleClick}>Register</Link>
              
            </li>
          </ul>
          <div className="navbar-icon" onClick={handleClick}>
            

            {click ? (
              <span className="icon">
                <HiOutlineMenu  />{" "}
              </span>
            ) : (
              <span className="icon">
                <GrClose />
              </span>
            )}
          </div>
        </div>
      </nav>
      
    
  );
}

export default Header;