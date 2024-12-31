import React, { useState } from 'react';
import './style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1>DataAnalyst.me</h1>
      <ul className={isOpen ? 'open' : ''}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <button>☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
