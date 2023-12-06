import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Colorinput from './components/Colorinput';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Colorinput/>
    </>
  )
}

export default App
