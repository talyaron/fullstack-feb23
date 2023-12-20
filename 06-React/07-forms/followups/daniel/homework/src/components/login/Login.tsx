import Button from '@mui/material/Button';
import { FC, useState } from 'react';
import userLogin, { UserData } from '../../api/UserApi';
import { Box, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { InputPassword } from './Password';


interface LoginProps {
  onLoginSuccess: (userData: UserData) => void;
}

const Login: FC<LoginProps> = ({ onLoginSuccess }) => {

  const [data, setData] = useState({ username: '', password: '' });


  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const userData = {
      username: data.username,
      password: data.password
    }


    try {
      const response = await userLogin(userData.username, userData.password);
      if (response) {
        onLoginSuccess({
          username: data.username,
          password: data.password
        }) 
      }else {
        throw new Error("Password or Username are incorrect");
      }
    } catch (error) {
      console.error("Login failed", error)
    }
  };


  return (
    <>
      <Container sx={{ padding: '0px 4px 35px 3px' }}>
          <p style={{ color: 'gray'}}>App name</p>
          <h2 style={{ color: '#6467d4',marginBottom:'35px',fontSize: '25px' }}>Login</h2>
        <Box sx={{ width: '100%' }}>
          <form onSubmit={handleSubmit}>
          
              <TextField variant='outlined' className="textField" fullWidth type="text" size="small" value={data.username} placeholder="Username" onInput={(ev) => { setData((prevData) => ({ ...prevData, username: (ev.target as HTMLInputElement).value })) }} />
           
        
              <InputPassword onInput={(ev) => { setData((prevData) => ({ ...prevData, password: (ev.target as HTMLInputElement).value })) }} />
            
            <Button size='small' type='submit' variant='contained' sx={{ backgroundColor: '#6467d4', color: 'white' }}>Login</Button>
            <p style={{ paddingBottom: '150px', textAlign: 'center', color: 'gray' }}>Forget your password?</p>
            <div style={{ padding: '3px 2px', border: "1px solid gray", margin: 'auto', width: '1px', borderRadius: "12px", textAlign: 'center' }}></div>
            <br />
            <Button size='small' sx={{ color: '#6467d4'}} variant='outlined'>Signup</Button>
          </form>
        </Box>
      </Container>
    </>
  )
}

export default Login


