import { useState } from 'react'
import './App.scss'
import Login from './components/login/Login'
import {UserData} from './api/UserApi'


function App() {
  const [user, setUser] = useState<UserData | null>(null)

  const handleLoginSuccess = (userData:UserData)=>{
    setUser(userData)
  };

  const handleLogout = ()=>{
    setUser(null)
  };


  return (
    <>
    <div className='container'>
     <h1>{user ? `Welcome, ${user.username}!` : ""}</h1>

     {user ? (
      <button onClick={handleLogout}>Logout</button>
     ): (
      <Login onLoginSuccess={handleLoginSuccess} />
     )}

    </div>
    </>
  )
}

export default App
