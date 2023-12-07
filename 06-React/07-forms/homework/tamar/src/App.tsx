import './App.css'
import Login from './component/Login';
import User from './types/type';
import { useState } from "react";
import UserPosts from './component/UserPosts';

function App() {
  const [user, setUser] = useState<User>({})

  const handelApprovUser = (userObj: User) => {
    setUser(userObj)
    sessionStorage.setItem("userObj", userObj)
  }

  console.log(user)

  return (
    <>
      {user ?
        <UserPosts />
        :
        <Login
          handelApprovUser={handelApprovUser}
        />}
    </>
  )
}

export default App
