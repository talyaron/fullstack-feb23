
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import User from './components/User'
import { users } from './util/users'

function App() {

  const [header, setHeader] = useState("hello")
  const changeHeader = (userName: string) => {
    setHeader(userName)
  }


  return (
    <>
      <Navbar key={new Date().getTime()} header={header} />
      <div style={{ display: "flex", gap: "10px" }}>
        {users.map((user => {
          return (
            <User key={user.id} user={user} handleChangeHeader={changeHeader} />
          )
        }))}
      </div>
    </>
  )
}

export default App
