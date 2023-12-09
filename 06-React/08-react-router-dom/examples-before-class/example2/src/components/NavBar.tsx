import React from 'react'
import {NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        <h3>This is nav</h3>
        <NavLink className='navlink' to="/">Home</NavLink>
        <NavLink className='navlink' to="/about">About</NavLink>
    </nav>
  )
}

export default NavBar