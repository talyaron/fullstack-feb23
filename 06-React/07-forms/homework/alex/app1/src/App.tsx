import { useState } from 'react'
import './App.scss'
import Login from './components/Users/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>

    </>
  )
}

export default App
