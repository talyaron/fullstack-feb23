import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import userImage from '../images/user.svg';
import logo from '../images/multi-musix-high-resolution-logo-transparent.png';


const Navbar = () => {
  return (
    <div className='allheader'>
      <nav>

        <img className="logo" src={logo} alt="logo" />
        <NavLink to="/home-page">Home</NavLink>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/playlist">playlist</NavLink>
        <NavLink to="/login-page">
          <img className="user" src={userImage} alt="" />   </NavLink>

      </nav>
    </div>
  );
};

export default Navbar;