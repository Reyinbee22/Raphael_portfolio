import React from 'react';
import './style.css';

const Navbar = () => {
    return (
        <nav className="navbar">
        <h1>DataAnalyst.me</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="hamburger">
          <button>☰</button>
        </div>
      </nav>
      
    );
  };
  
  export default Navbar;
  
