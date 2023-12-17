import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TimerComponentManualStart from './components/timerComponentManualStart';
import TimerComponentAutoStart from './components/timerComponentAutoStart';

function App() {
 

  return (
    <>
      <TimerComponentAutoStart/>
      <TimerComponentManualStart />
    </>
  )
}

export default App
