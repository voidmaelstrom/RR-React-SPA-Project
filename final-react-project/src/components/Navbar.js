import '../App.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <nav className="navBar">
      <ul>
        <li><NavLink to="/">Search for Music</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">About</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;