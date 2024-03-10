import { useState } from 'react'
import './App.scss'
import Login from './components/Login/Login'
import UserPost from './components/UserPost/UserPost'

function App() {
  const [user, setUser] = useState()


  const setlogUser = (user: any) => {
    setUser(user)
    sessionStorage.setItem("token", user.token)
  }
  return (
    <>
      <Login  onLogin={setlogUser} />
      {user ? <UserPost user={user} /> : null}
    </>
  )
}

export default App
