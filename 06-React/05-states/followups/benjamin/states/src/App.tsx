import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './Components/User/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <User id={1} name='benny' lastName='volo' emoji="😊"></User>
     <User id={2} name='sd' lastName='fg'></User>

    </>
  )
}

export default App
