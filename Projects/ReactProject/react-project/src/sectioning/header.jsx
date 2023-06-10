import React from 'react';
import data from '../jsonfiles/navs.json';
import { NavLink } from 'react-router-dom';

const Header = () => {

const navs = data.map((nav, index) => (
  <NavLink className="headerText" to={nav.href}>{nav.name}</NavLink>
));

  return ( 
  <header>
    <div className="y-wrap navs">{navs}</div>
  </header>
  )
};

export default Header;