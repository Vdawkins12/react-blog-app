import React from 'react';
import Navbar from './Navbar'; 

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>My React Blog</h1>
        <Navbar /> {}
      </div>
    </header>
  );
}

export default Header;