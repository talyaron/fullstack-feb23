import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorChanger from './components/ColorChanger'
import { Password } from './components/Password'

function App() {

  return (
    <>
     <ColorChanger/>
     <Password/>
    </>
  )
}

export default App
