import axios from 'axios'
import { useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

const DATA_API = "https://jsonplaceholder.typicode.com"
const Practice = () => {
    const [users, setUsers] = useState([])
    const getData = async () => {
        const { data } = await axios.get(`${DATA_API}/users`)
        // console.log(data);
        setUsers(data)

    }

    useEffect(() => {
        getData()
    }, [])

    const addNewPost = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        // console.log(ev);
        // console.log(ev.target.elements.title.value);
        // console.log(ev.target.elements.body.value);
        // console.log(ev.target.elements.userId.value);


        const targetEv = ev.target as typeof ev.target & {
            title: { value: string };
            body: { value: string }
            userId: { value: number }
        };

        const title = targetEv.title.value
        const body = targetEv.body.value
        const userId = targetEv.userId.value

        console.log(title, body, userId);

        const { data } = await axios.post(`${DATA_API}/posts`, { title, body, userId }) //post
        console.log(data);
        // const {data} = await axios.put/patch(`${dataAPI}/posts`, {title, body, userId}) //put/patch

        // const {data} = await axios.delete(`${dataAPI}/posts`, {data : { id: userId}}) //delete
    }

    return (
        <div>
            <MenuList>
                <MenuItem>
                    <ListItemText>Something</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText>Something123123</ListItemText>
                </MenuItem>
            </MenuList>
            <h1>Practice</h1>
            {/* <p>{users}</p> */}

            <div>
                {users.length > 0 ?
                    users.map(user => (
                        <div key={user.id}>
                            <h3>{user.name}</h3>
                            <p>username: {user.username}</p>
                        </div>
                    ))
                    :
                    <h2>Loading</h2>
                }
            </div>

            <form onSubmit={addNewPost}>
                <input type="text" name="body" placeholder='Enter your body' />
                <input type="text" name="title" placeholder='Enter your title' />
                <input type="number" name="userId" placeholder='Enter user ID' />
                <button type="submit"><AddIcon /></button>
            </form>
        </div>
    )
}

export default Practice