import './App.css'
import './components/User'
import UserCard from './components/User'
import { users } from "./data/users"
import { useState } from "react";

function App() {
  const [userArr, setUserArr] = useState<any[]>(users)

  return (
    <>
      {userArr.map((user) => {
        return (
          <UserCard
            id={user.id}
            key={user.id}
            name={user.name}
            lastname={user.lastname}
            handleAdd={user.handleAdd}
            counter={user.counter}
            handleRemove={user.handleRemove}
          />
        )
      })}
    </>
  )
}

export default App
