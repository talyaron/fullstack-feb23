import { useState } from 'react'
import './App.scss'
import Login from './components/Login'
import UserPosts from './components/UserPosts'

function App() {
  const [error, setError] = useState("")
  const [username, setUserName] = useState("")
  // const [userLogedIn, setUserLogedIn] = useState(false)


  return (
    <>

      {username ? <UserPosts /> : <Login setUserName={setUserName} setError={setError} error={error} />}

    </>
  )
}

export default App
