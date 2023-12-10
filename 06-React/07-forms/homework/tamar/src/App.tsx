import './App.css'
import Login from './component/Login';
import User from './types/type';
import { useState } from "react";
import UserPosts from './component/UserPosts';

function App() {
  const [user, setUser] = useState<User>({})
  const [userOn, setUserOn] = useState(false);

  const handelApprovUser = (userObjID: User) => {
    console.log("at handelApprovUser the userObj.id is:", userObjID)
    setUser(userObjID)
    setUserOn(true);
    sessionStorage.setItem("userObj", userObjID)
  }
  console.log(user)

  return (
    <>
      {/* {(userOn == true) ? <UserPosts /> :
        <Login
          handelApprovUser={handelApprovUser}
        />} */}
      <Login
        handelApprovUser={handelApprovUser}
      />
    </>
  )
}

export default App
