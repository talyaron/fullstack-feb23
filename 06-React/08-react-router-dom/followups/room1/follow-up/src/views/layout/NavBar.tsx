import React from 'react'
import {NavLink} from "react-router-dom"



const NavBar = () => {
  return (
    <nav> 
    <NavLink to="/">home</NavLink>
    <NavLink to="/about">about</NavLink>
    <NavLink to="/contact">contact</NavLink>

    </nav>
  )
}

export default NavBar