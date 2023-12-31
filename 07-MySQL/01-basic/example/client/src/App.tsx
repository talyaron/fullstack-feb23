import axios from 'axios'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleCheck = async () => {
    try {
      const { data } = await axios.get("/api/check")
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <button onClick={handleCheck}>TEST</button>
    </>
  )
}

export default App
