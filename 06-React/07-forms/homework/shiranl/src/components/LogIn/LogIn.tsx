import React, { useState } from 'react'
import './LogIn.scss'
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons from react-icons library
import { getUsers } from '../../api/users';

const LogIn = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
   

  return (
    <div className='logIn_card'>
        <p>App name</p>
        <h2>Login</h2>
        <form className='logIn_card__form'>
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
