import React, { useState } from 'react'
import { checkUserAccess } from '../api/login';
// import { setUserName } from '../App';
const Login = () => {
    const [username, setUserName] = useState("")
    const [visible, setVisible] = useState(false)
    const [error, setError] = useState("")
    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const userName = (ev.target as HTMLInputElement).userName.value;
        const userPassword = (ev.target as HTMLInputElement).userPassword.value;
        const token = await checkUserAccess(userName, userPassword)
        if (token) {
            sessionStorage.setItem("token", token)
            setUserName(userName)
            alert(`hello ${userName}, login successful`)
        } else {
            setError(token.message);
            // console.log(token.message);
        }
    };
    return (
        <div className="login">
            <p>Social Media</p>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user name" id="userName" placeholder='User name' />
                <div className="password-wrapper">
                    <img src="../public/Images/eye-slash-regular.svg" alt="show password" className='eye-slash' onClick={() => setVisible(!visible)} />
                    <input type={visible ? "text" : "password"} name="password" id="userPassword" placeholder='Password' className='password-field' />
                </div>
                <input type="submit" value="Login" className='login-btn' />
                {/* <button className='ligin-btn'>Login</button> */}
                <button className='new-password'>forget your password?</button>
                <p style={{ fontSize: "12px" }}>{error ? error : ""}</p>
            </form>
            <button className='signup'>Signup</button>
        </div>
    )
}

export default Login