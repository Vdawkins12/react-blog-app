import React from 'react';
import { Link } from 'react-router-dom'; 

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/blog">About</Link> 
        
        <Link to="/contact">Contact</Link>
      </div>

      <p>&copy; {currentYear} MyBlogVD. All rights reserved.</p>
    </footer>
  );
}

export default Footer;