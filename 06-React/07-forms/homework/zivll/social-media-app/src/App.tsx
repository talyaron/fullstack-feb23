import { useState } from 'react'
import './App.scss'
import Login from './components/Login'

function App() {
  const [error, setError] = useState("")
  const [username, setUserName] = useState("")
  return (
    <>
      <Login setUserName={setUserName} setError={setError} error={error} />
    </>
  )
}

export default App
