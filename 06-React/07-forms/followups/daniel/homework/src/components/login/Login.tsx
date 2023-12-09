import Button from '@mui/material/Button';
import { FC, useState } from 'react';
import userLogin,{UserData} from '../../api/UserApi';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

interface LoginProps{
  onLoginSuccess: (userData:UserData) => void;
}
const Login:FC<LoginProps> = ({ onLoginSuccess }) => {
  
    const [data, setData] = useState({username:'',password:''});


    const handleSubmit = async (ev:React.FormEvent<HTMLFormElement>)=>{
       ev.preventDefault();

       const userData ={
        username: data.username,
        password: data.password
       }
     

        try {
          const response = await userLogin(userData.username, userData.password);
          console.log("got user from api",response)
          if(response){
            // console.log("got token successfully",user.token)

            onLoginSuccess({
              username: data.username,
              password: data.password
            })
          }
        } catch (error) {
          console.error("Login failed",error)
        }
    };


  return (
    <>
    <p style={{color:'gray'}}>App name</p>
    <h2 style={{color:'#6467d4'}}>Login</h2>
    <form onSubmit={handleSubmit}>
    <input type="text" value={data.username} placeholder="Username" onInput={(ev)=> {setData((prevData)=>({...prevData,username:(ev.target as HTMLInputElement).value}))}}/>
    <div style={{position:"relative"}}>
    <input style={{position:"relative"}} type="password" value={data.password} placeholder="Password" onInput={(ev)=>{setData((prevData)=>({...prevData, password:(ev.target as HTMLInputElement).value}))}} />
    <VisibilityOffOutlinedIcon sx={{position:"absolute",transform:'translateX(-150%)' }}/>
    </div>
    <Button type='submit' variant='contained' sx={{backgroundColor:'#6467d4', color:'white'}}>Login</Button>
    <p style={{paddingBottom:'173px', textAlign:'center', color:'gray'}}>Forget your password?</p>
    <div style={{marginBottom:'143px',padding:'3px 2px', border:"1px solid gray",margin:'auto',width:'1px', borderRadius:"12px", textAlign:'center'}}></div>
    <Button sx={{color:'#6467d4', marginTop:'17px'}} variant='outlined'>Signup</Button>
    </form>
    </>
  )
}

export default Login


