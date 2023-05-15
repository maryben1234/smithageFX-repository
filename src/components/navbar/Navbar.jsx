import React, { useState } from 'react';
import './Naavbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const toggleDropdown1 = () => setShowDropdown1(!showDropdown1);
  const toggleDropdown2 = () => setShowDropdown2(!showDropdown2);

  return (
    <nav className="navbar">
      <div className="navbar-brand">My Site</div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li className="dropdown">
          <a href="#" onClick={toggleDropdown1}>Products</a>
          {showDropdown1 && (
            <ul className="dropdown-menu">
              <li><a href="#">Product 1</a></li>
              <li><a href="#">Product 2</a></li>
              <li><a href="#">Product 3</a></li>
            </ul>
          )}
        </li>
        <li className="dropdown">
          <a href="#" onClick={toggleDropdown2}>Services</a>
          {showDropdown2 && (
            <ul className="dropdown-menu">
              <li><a href="#">Service 1</a></li>
              <li><a href="#">Service 2</a></li>
              <li><a href="#">Service 3</a></li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
