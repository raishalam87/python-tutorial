import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Python Tutorial</h2>
          <p>Empowering students with coding knowledge</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tutorial">Courses</Link></li>
            <li><Link to="/tests">Tests</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@pythontutorial.com</p>
          <p>Phone: +91 9876543210</p>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Python Tutorial. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
