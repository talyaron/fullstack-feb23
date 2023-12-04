import React from 'react'

const Login = () => {
    const handleSubmit = () => { };
    return (
        <div className="login">
            <p>Social Media</p>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user name" id="user name" placeholder='User name' />
                <input type="password" name="password" id="password" placeholder='Password' />
                <input type="submit" value="Login" className='login-btn' />
                {/* <button className='ligin-btn'>Login</button> */}
                <button className='new-password'>forget your password?</button>
            </form>
            <button className='signup'>Signup</button>
        </div>
    )
}

export default Login