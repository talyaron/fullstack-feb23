import { useState } from 'react'
import './App.scss'
import User from './components/User'
import users from './Util/users'
import Navbar from './components/Navbar'
import { UserType } from './types/userInterface'

function App() {
const [userClickedState , setUserClickedState] = useState(users[0])

  const changeNavbarByClickUser = (ev:any) => {
    console.log("clicked")
    const userId = ev.target.key
    const user = users.find(user => user.id === userId) ||users[0] ;
    setUserClickedState(user)
  }
  const handleClickOnUser = (userObj:UserType) => {
    setUserClickedState(userObj)
  }


  return (
    <>
      <Navbar user={userClickedState}/>
    {
      users.map(user => {
        return (<User key={user.id} handleClickOnUser={handleClickOnUser}  user={user}></User>)
      })
    }
    </>
  )
}

export default App
