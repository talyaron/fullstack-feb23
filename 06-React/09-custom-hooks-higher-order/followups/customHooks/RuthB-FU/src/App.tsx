import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimerOnMount from './components/TimerOnMount'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TimerOnMount/>
     <Timer/>
    </>
  )
}

export default App
