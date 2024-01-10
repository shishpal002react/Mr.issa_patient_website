import React, { useEffect, useState } from "react";
import "./Navbar.css"; // Import the CSS file
import { Link } from "react-router-dom";
import { user_detail } from "../../Api_Collection/Api";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };



  return (
    <>
      <nav className={`navbar ${showMenu ? "responsive" : ""}`}>
        <div className="logo">Logo</div>
        <div className={`nav-links ${showMenu ? "show" : ""}`}>
          <a href="#">Home</a>
          <a href="#">Intake</a>
          <a href="#">Appointment Scheduling</a>
          <a href="#">Profile</a>
        </div>
        <div className="buttons">
          {/* '/patient_panel' */}
          <Link to={"/login"}>
            <button className="loginbtn">Log In</button>
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Unicode character for the hamburger menu */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
