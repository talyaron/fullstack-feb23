import {useState,useEffect} from 'react'
import { getAllUsers } from '../../api/usersApi'
import UserCard from '../userCard/UserCard'
import ListItemButton from '@mui/material/ListItemButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// 2. create UserPosts component that fetches and displays a list of posts for a given user ID using the JSONPlaceholder API (https://jsonplaceholder.typicode.com/). Add this component to each user card, and only show it after that user card has been clicked. show this component only when the user card is clicked.

// # Expactions

// 1.  Each of the components should only fetch data when it mounts.


const UserPosts = () => {
    const [users,setUsers] = useState([])

    const handleGetUsers = async ()=>{
        try {
            const data = await getAllUsers()
            if(data.length > 0){
                setUsers(data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        handleGetUsers()
    },[])


  return (
    <>

    <div style={{backgroundColor:"wheat"}}>
        <Box sx={{ flexGrow: 1 }}>
    <Container>
        <Grid container md={'auto'} lg={'auto'} xs={2} width={'100%'}>

        {users.length >0 ? 
        users.map(user =>(
               
                      <UserCard user={user} />
              
             

        ))
        :
        <h2>Loading</h2>
        }
        </Grid>
    </Container>
    </Box>
    </div>

    </>
  )
}

export default UserPosts