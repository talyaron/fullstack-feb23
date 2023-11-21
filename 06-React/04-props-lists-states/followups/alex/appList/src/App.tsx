import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
      <div className="App">
      {users.map((user) => {
        return <UserCard key={user.email} email={user.email} username={user.username} />;
      })}
      {users.map((user) => {
        return (
          <div key={user.email}>
            <h1>{user.email}</h1>
            <p>{user.username}</p>
          </div>
        );

      </div>

    </>
  )
}

export default App
