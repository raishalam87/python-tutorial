import React from "react";
import '../style/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Frontier Code School by Raish. All rights reserved.</p>
        <p>
          Made with ❤️ for school students | 
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"> GitHub</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
