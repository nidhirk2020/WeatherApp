// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Ensure you have the correct path to your CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src="path_to_your_logo/logo.png" alt="Logo" className="logo" /> {/* Add your logo here */}
        <ul className="navbar-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/chatbot">ChatBot</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

