import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/electro">Zedd</NavLink></li>
        <li><NavLink to="/dnb">Paperclip</NavLink></li>
        <li><NavLink to="/dubstep">Zomboy</NavLink></li>
        <li><NavLink to="/techno">Carl Cox</NavLink></li>
        <li><NavLink to="/trance">Cosmic Gate</NavLink></li>
        <li><NavLink to="/psytrance">Juno Reactor</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;