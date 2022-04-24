import React from 'react';
import './Home.css';

function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar-container container">
      <input type="checkbox"/>
      <div className="hamburger-lines">
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </div>
      <ul className="menu-items">
        <li>Home</li>
        <li><a href="#about">About</a></li>
        <li><a href="#food">Shop</a></li>
        <li><a href="#food-menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      <h1 className='logo'>logo</h1>
      
    </div>
  </nav>
  );
}

export default Navbar;