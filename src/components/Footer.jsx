import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>My React Blog</h1>
      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;