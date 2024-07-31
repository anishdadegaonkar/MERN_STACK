import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.webp";
function Navbar() {
  return (
    <div>
      <nav>
        <img src={logo} alt="Logo" style={{height:"50px"}} />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
