import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/blog">About</Link> 
        
        <Link to="/contact">Contact</Link>
      </div>

      <p>&copy; {currentYear} My Creative Blog. All rights reserved.</p>
    </footer>
  );
}

export default Footer;