import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // this is the brain of the operation

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Show different buttons based on login status */}
      <div className="navbar-actions">
        {user ? (
          // If logged in, show the users name and logout button
          <>
            <span className="user-name">Hello, {user.name}!</span>
            <button onClick={logout} className="logout-btn">Logout</button>
          </>
        ) : (
          // If logged out, show Login link
          <Link to="/login" className="login-link">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;