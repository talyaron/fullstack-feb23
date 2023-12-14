import React,{ useState } from 'react';
import { FaEye , FaEyeSlash} from 'react-icons/fa'
import './dist/Users.css'
import { usersList } from '../../util/usersList';


const Login = () => {
    const [user, setUser] = useState<string>("")
    const [visible, setVisible] = useState(true)
    const [password, setPassword] = useState<string>("")
    
    const userExists = usersList.some(user => user.userName = user
       && user.passWord == password);

      if (userExists) {
        console.log('Login successful!');
        // Perform actions for successful login
      } else {
        console.log('Invalid userName or password');
        // Handle invalid login
      }  
    
    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setUser(user)
    } 

    const togglePasswordVisibility = () => {
      setVisible(!visible);
    }

    return (

        <div className='password-input-container'
        style={{backgroundColor:"white",
                     padding:"10px",
                     boxShadow:"5px 10px 18px #6b86b5"}}>
            <p style={{textAlign:"left",
                       margin:"15px 10px",
                       fontSize:"10px",
                       color:"#a6a6ab"
                       }}>App name</p>
            <h1 style={{textAlign:"left",
                       margin:"0px 10px 20px ",
                       color:"#755dd4",
                       fontSize:"20px"}}>Login</h1>
            <form onSubmit={handleSubmit} 
                       style={{display:"flex",
                               flexDirection:"column"
                               }}>
                <input style={{margin:"0px 10px 10px ",
                               border:"1.5px solid #80a3e0",
                               borderRadius:"1.5px",
                               height:"23px"
                             }}
                type="text"
                value={user}
                placeholder="UserName"
                onInput={(ev) => {
                  setUser((ev.target as HTMLInputElement).value)
                }}
                />
                <input 
                value={password}
                style={{margin:"0px 10px 10px ",
                               border:"1.5px solid #80a3e0",
                               borderRadius:"1.5px",
                               height:"23px"
                       }}
                type={visible ? "text" : "password"}
                placeholder='Password'
                onInput={(ev) => { 
                  setPassword((ev.target as HTMLInputElement).value)
                }}
                />
               <span className="password-toggle-button" onClick={togglePasswordVisibility}>
                     {visible ? <FaEyeSlash /> : <FaEye />}
               </span>
                <button type='submit'
                style={{backgroundColor:"#755dd4",
                margin:"0px 10px 10px ",
                color:"white",
                height:"27px",
                padding:"0px",
                borderRadius:"3px",
                fontSize:"10px"
                }}>Login</button>
                
                <a href="https://ide.geeksforgeeks.org/"
                style={{
                margin:"0px 10px 100px",
                fontSize:"10px",
                color:"#a6a6ab"
                }} > 
                  Forgot your password?
                </a> 
                <div style={{display:"flex",
                            flexDirection: "row",
                            textAlign:"center",
                            height: "14px"}}>
                    <div style={{height: "6px",
                             width: "80px", 
                             borderBottom: "0.1px solid grey",
                             margin:"0px 10px 10px 10px" }}></div>
                    <div style={{width:"10px",height:"10px",
                             border: "0.1px solid grey",
                             borderRadius:"50%",
                             margin:"0px 10px 10px 10px" }}></div>       
                     <div style={{height: "6px",
                             width: "80px", 
                             borderBottom: "0.1px solid grey",
                             margin:"0px 10px 30px 10px" }}></div>
                             
                </div>
                {/* <a href='https://ide.geeksforgeeks.org/' >  */}
                   <button 
                     style={{backgroundColor:"white",
                     margin:"10px 10px 10px ",
                     color:"#755dd4",
                    //  width:"200px",
                     border:"1.5px solid #80a3e0",
                     height:"27px",
                     padding:"0px",
                     borderRadius:"3px",
                     fontSize:"10px"
                     }}> 
                       Signup
                   </button> 
                {/* </a>  */}
            </form>


        </div>
    )


}

export default Login