import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec elit sapien. Mauris vel tincidunt augue. Suspendisse aliquet malesuada augue, ac bibendum turpis ultricies eget.</p>
          </div>
          <div className="col-md-3">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li><i className="fas fa-map-marker-alt"></i> 123 Main St, Anytown USA</li>
              <li><i className="fas fa-phone"></i> 1-800-123-4567</li>
              <li><i className="fas fa-envelope"></i> info@example.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
