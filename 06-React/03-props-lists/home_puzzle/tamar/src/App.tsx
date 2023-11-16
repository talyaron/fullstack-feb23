import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Animal from './component/animal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Animal type="cat" name="layla" age={15}/>
      <Animal type="dog" name="nana" age={10}/>
      <Animal type="snake" name="moon" age={3}/>
      <Animal type="fish" name="Doly" age={0.6}/>
    </>
  )
}

export default App
