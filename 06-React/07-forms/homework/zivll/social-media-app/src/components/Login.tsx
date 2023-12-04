import React, { useState } from 'react'

const Login = () => {
    const [visible, setVisible] = useState(false)
    const handleSubmit = () => { };
    return (
        <div className="login">
            <p>Social Media</p>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user name" id="user name" placeholder='User name' />
                <div className="password-wrapper">
                    <img src="../public/Images/eye-slash-regular.svg" alt="show password" className='eye-slash' onClick={() => setVisible(!visible)} />
                    <input type={visible ? "text" : "password"} name="password" id="password" placeholder='Password' className='password-field' />
                </div>
                <input type="submit" value="Login" className='login-btn' />
                {/* <button className='ligin-btn'>Login</button> */}
                <button className='new-password'>forget your password?</button>
            </form>
            <button className='signup'>Signup</button>
        </div>
    )
}

export default Login