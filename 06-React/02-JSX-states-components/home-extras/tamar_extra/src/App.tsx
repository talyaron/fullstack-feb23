import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [redFollow, serRedFollow] = useState()
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='color'></div>
      <div className='follow'></div>
    </>
  )
}

export default App
