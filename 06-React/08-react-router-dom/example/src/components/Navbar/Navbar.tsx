import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h3>This is nav</h3>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink className="navElement" to="/homepage">homepage</NavLink>
    </nav>
  );
};

export default Navbar;
