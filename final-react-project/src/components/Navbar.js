import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/">Search for Music</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">About</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;