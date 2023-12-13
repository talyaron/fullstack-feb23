import React from 'react'
import useCounter from '../../hooks/useCounter';
import { NavLink } from "react-router-dom";


const Money = () => {
    const{counter, handleAddOne} = useCounter();
  return (
    <div>
        <h1>Money</h1>
        <h2>{counter}</h2>
        <button onClick={handleAddOne}>Add One on click</button>
        <NavLink to="/People">to People </NavLink>
    </div>
  )
}

export default Money
