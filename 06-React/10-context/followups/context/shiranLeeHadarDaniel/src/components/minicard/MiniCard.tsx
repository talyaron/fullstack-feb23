import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../context/userContext';


const MiniCard = () => {
  const user = useContext(UserContext);
   
  return (
    <div>
      <h1>Mini Card</h1>
      <h2>Hello from Mini Card {user?.name}</h2>
      <NavLink to="/card">Card</NavLink>
      <NavLink to="/">Home</NavLink>

      
    </div>
  )
}

export default MiniCard
