import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'
import useTimer from './hooks/useTimer'

function App() {
  const { minutes, seconds, decrement } = useTimer()
  useEffect(() => {
    setInterval(() => { decrement() }, 1000)
  }, [])
  return (
    <>
      <Timer />
    </>
  )
}

export default App
