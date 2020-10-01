import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
      <nav className="container mx-auto">
        <h1>Email Generator</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Help</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
};

export default Navbar;