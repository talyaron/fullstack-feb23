import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import ColorChanger from './components/ColorChanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<ColorChanger/>
    </>
  )
}

export default App
