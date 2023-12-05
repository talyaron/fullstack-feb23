import React, { useState } from 'react'
import { checkUserAccess } from '../api/login';
// import { setUserName } from '../App';
interface LoginProps {
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    error: string
    setError: React.Dispatch<React.SetStateAction<string>>;
}
const Login: React.FC<LoginProps> = ({ setUserName, error, setError }) => {
    const [visible, setVisible] = useState(false)
    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const userName = (ev.target as HTMLInputElement).userName.value;
        const userPassword = (ev.target as HTMLInputElement).userPassword.value;
        const { token } = await checkUserAccess(userName, userPassword, setError);
        if (token) {
            sessionStorage.setItem("token", token)
            setUserName(userName)
            alert(`hello ${userName}, login successful`)
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
                <button className='new-password'>forget your password?</button>
                <strong> <p style={{ fontSize: "12px" }}>{error ? error : ""}</p></strong>
            </form>
            <button className='signup'>Signup</button>
        </div>
    )
}

export default Login