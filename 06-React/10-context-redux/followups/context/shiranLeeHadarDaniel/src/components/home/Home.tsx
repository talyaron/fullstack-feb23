import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getUser } from '../../api/userApi';
import Card from '../card/Card';
import { UserContext } from '../../context/userContext';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const [user, setUser] = useState();

    // happens in api folder, under userApi.ts file
    async function getUser() {
        try {
          const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/users/10"
          );
          setUser(data);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
  
    useEffect (  () => {
      getUser();
    }
    , []);

  return (
    <div>
      <h1>Home</h1>
      <UserContext.Provider value={{ user, setUser }}>
       <NavLink to="/card"> To Card </NavLink>
       <NavLink to="/MiniCard"> To Card </NavLink>
    </UserContext.Provider>

    </div>
  )
}

export default Home
