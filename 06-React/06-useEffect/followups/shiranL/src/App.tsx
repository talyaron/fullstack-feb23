import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountdownTimer from './components/CountdownTimer/CountdownTimer'
import { parse } from '@babel/core'
import WindowSize from './components/WindowSize/WindowSize'

function App() {
  const [count, setCount] = useState(1)
  const [initialTitle, setInitialTitle] = useState('shiran');
  const [initialTimer, setInitialTimer] = useState(60);
  const handleAdd = () => {
    setCount((prevState) => prevState + 1)
    setInitialTitle(`Shiran Clicked ${count} times`);
  };
 

  return (
    <>
     <>
      <div className='main'>
        <div className='userClick'>     
          <p id='count-display'>{initialTitle}</p>
          <button onClick={handleAdd}>Click me</button>
        </div>
 
      </div>
      <div className='CountdownTimer'>
        <CountdownTimer initialTimer={initialTimer} />
      </div>
      <div className='resize'>
      <WindowSize  />
      </div>
    
    </>
    

    </>
  )
}

export default App
