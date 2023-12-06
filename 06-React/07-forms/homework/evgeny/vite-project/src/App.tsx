import { useState } from 'react'
import './App.css'
import Login from '../src/controllers/login'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <p>hello</p>
     <Login></Login>
    </>
  )
}

export default App
