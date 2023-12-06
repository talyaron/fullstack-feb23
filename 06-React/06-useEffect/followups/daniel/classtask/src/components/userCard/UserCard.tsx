import {FC,useState} from 'react'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
interface User {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface UserCardProps {
    user:User
}


const UserCard:FC<UserCardProps> = ({user}) => {
    const [display, setDisplay] = useState(false)

    const handleDisplay =()=>{
        setDisplay(!display)
    }
 
  return (
    <>
    <h3>{user.userId}</h3>
    
  
    {display && (<>


        <Paper elevation={10} sx={{fontSize:8, maxWidth:'50%', margin: 'auto'}}>
            <Container>
                <Grid container spacing={2}>

    <h1>{user.title}</h1>
    <h2>{user.body}</h2>
    <h4>{user.id}</h4>

                </Grid>
            </Container>

        </Paper>

    </>)}
    <Button variant='outlined' onClick={handleDisplay}>{display ? 'hide' :'show'} details</Button>

    </>
  )
}

export default UserCard