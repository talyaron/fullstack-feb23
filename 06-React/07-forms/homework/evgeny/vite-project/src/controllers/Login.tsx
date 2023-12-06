import React from 'react'

const Login = () => {
    const handlelogin=(ev:any)=>{
        ev.preventdefult()
        return <p>logged in</p>
    }

  return (
    <div>
        <form onSubmit={handlelogin}>
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password'/>
            <button type='submit'>login</button>
        </form>
    </div>
  )
}

export default Login
