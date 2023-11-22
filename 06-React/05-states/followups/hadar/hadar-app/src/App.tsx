import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import './components/User'

function App() {
  const [count, setCount] = useState(0)
  const users= [
    { id: 1, name: "gili", lastname: "mena", counter:0},
    { id: 2, name: "israel", lastname: "israeli", counter:0 },
    { id: 3, name: "hadar", lastname: "hadar", counter:0 }
  ];



  return (
    <>
          {users.map((users) => {
          return (
            <div key={users.id} style={{ border: "1px solid white" }}>
              <p>{users.name}</p>
              <p>{users.lastname}</p>
              <p>{users.id}</p>
              <p>{users.counter}</p>
            </div>
          );
        })}
    </>
  )
}

export default App
