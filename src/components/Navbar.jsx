import React, { useState } from "react";
import "./Naavbar.css";
import Logo from "../images/smithagepic.jpg";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar shadow-md">
      <div className="nav-container flex items-center justify-between">
        <div className="navbar-logo">
          <Link to="/">
            <img src={Logo} className="w-[60px] h-[60px]" alt="" />
          </Link>
        </div>
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <ul className="flex">
            <li>
              <Link to="/" className="text-[20px] mr-7">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-[20px] mr-7">
                About
              </Link>
              <div className="dropdown-content">
                <Link to="/services/service1">Service 1</Link>
                <Link to="/services/service2">Service 2</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/services" className="text-[20px] mr-7">
                Services
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/products" className="text-[20px] mr-7">
                Careers
              </Link>
              <div className="dropdown-content">
                <div>
                  <Link to="/products/product1">Product 1</Link>
                </div>
                <div>
                  <Link to="/products/product2">Product 2</Link>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/services" className="text-[20px] mr-7">
                Portfolio
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/services" className="text-[20px] mr-7">
                Products
              </Link>
              <div className="dropdown-content">
                <div>
                  <Link to="/contact/address">Address</Link>
                </div>
                <div>
                  <Link to="/contact/phone">Phone</Link>
                </div>
                <div>
                  <Link to="/contact/email">Email</Link>
                </div>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/contact" className="text-[20px]">
                Contact
              </Link>
             
            </li>
          </ul>
        </div>
        {/* <div className="nav-icon" onClick={toggleNav}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
