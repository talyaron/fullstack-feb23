import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <h3>This is nav</h3>
      
       <NavLink to="/register-page">Register</NavLink>
       <NavLink to="/home-page">Home</NavLink>
    </nav>
  );
};

export default Navbar;
