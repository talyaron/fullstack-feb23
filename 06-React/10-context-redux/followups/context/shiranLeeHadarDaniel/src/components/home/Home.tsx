
import { useEffect, useState } from 'react'
import { getUserdb } from '../../api/userApi';
import { UserContext } from '../../context/userContext';
import Card from '../card/Card';
import MiniCard from '../minicard/MiniCard';
import { NavLink } from 'react-router-dom';



const Home = () => {
    const [user, setUser] = useState<User | null>();

    // happens in api folder, under userApi.ts file
    async function getUser() {
        try {
            const data: User = await getUserdb();

            setUser(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getUser();
    }
        , []);


    return (
    <div>
        <h1>Home</h1>
        <NavLink to="/card">Card   ***  </NavLink>
        <NavLink to="/minicard">Mini Card</NavLink>
        <Card />
        <MiniCard />
    </div>

    )
}

export default Home
