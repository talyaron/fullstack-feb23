import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import LogIn from './components/LogIn/LogIn'

function App() {
  const [user, setUser] = useState()

  return (
    <>
      <div className='main'>
        
        <LogIn setUser={setUser}/>

      </div>
    </>
  )
}

export default App
