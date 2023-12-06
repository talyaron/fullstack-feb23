import React, { useState } from 'react'
import './LogIn.scss'
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons library
import { getUsers, signIn } from '../../api/users';
interface UserProps {
    username: string;
    password: string;
    setUser: (user: User) => void;
}

const LogIn : React.FC<UserProps> = ({setUser}) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const [users, setUsers] = useState<User[]>([]);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    const handelLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            // const data = await getUsers();
            
            // if (data.users) {
            //   setUsers(data.users)
            //   console.log(data.users);
            //   console.log('userName  '+userName);
            //   console.log('password  '+password);
            //  const user = users.find((user) => user.username == userName && user.password == password);

            //  console.log('User '+user);
             
            //  if(user) {
            //    console.log('login success')
            //  } else {
            //     console.log('login failed')
            //  }
            // } 
            const user = await signIn(userName,password)
            setUser(user)
        } catch (error) {
           console.error(error);
        }
      };
  return (
    <div className='logIn_card'>
        <p>App name</p>
        <h2>Login</h2>
        <form className='logIn_card__form' onSubmit={handelLogin}>
            <input  type='text' id='userName'   name='userName' value={userName} placeholder='userName'
                    onChange={(e) => setUserName(e.target.value)} />
            <div className='password-input-container'>
              <input type={showPassword ? 'text' : 'password'} id='password'
                name='password' value={password} placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}/>
              <div className='eye-icon' onClick={togglePasswordVisibility}>
                 {showPassword ?<FaEye />: <FaEyeSlash />  }
              </div>
        </div>
            <button className='logIn_btn' type='submit'>Login</button>
            <button className='forgot_password_btn' type='button'>Forgot your password?</button>
            <button className='signUp_btn' type='button'>Sign up</button>
        </form>
      
    </div>
  )
}

export default LogIn
