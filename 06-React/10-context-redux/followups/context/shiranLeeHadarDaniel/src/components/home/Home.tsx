
import { useContext, useEffect, useState } from 'react'
import { getUserdb } from '../../api/userApi';
import { UserContext } from '../../context/userContext';
import Card from '../card/Card';
import MiniCard from '../minicard/MiniCard';
import { NavLink } from 'react-router-dom';



const Home = () => {

    const user = useContext(UserContext);

    return (
    <div>
        <h1>Home  {user?.name}</h1>
        <NavLink to="/card">Card   ***  </NavLink>
        <NavLink to="/minicard">Mini Card</NavLink>
        <Card />
        <MiniCard />
    </div>

    )
}

export default Home
