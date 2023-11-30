import './App.css'
import Navbar from './components/Navbar';
import './components/User'
import UserCard from './components/User'
import { users } from "./data/users"
import { useState } from "react";

function App() {
  const [userArr, setUserArr] = useState<any[]>(users)
  const [username, setUsername] = useState<string>("")

const changNavByClick = (ev: any) => {
  const userID = ev.target.key  //collect the user id from its key fild
  const user = userArr.find(user => user.id === userID) || userArr[0];
  setUsername(user.name)
}

  return (
    <>
      <Navbar name={username} />
      {userArr.map((user) => {
        return (
          <UserCard
            id={user.id}
            key={user.id}
            name={user.name}
            emoji={user.emoji}
            lastname={user.lastname}
            handleAdd={user.handleAdd}
            counter={user.counter}
            handleRemove={user.handleRemove}
            handleClickOnUser={changNavByClick}
          />
        )
      })}
    </>
  )
}

export default App;
