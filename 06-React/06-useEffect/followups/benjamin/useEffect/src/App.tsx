import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(0)

  const newPromptFunc = () => {
    const newPrompt = prompt("put your number here")
  if(newPrompt){  const newAsNum = parseInt(newPrompt)
    setTime(newAsNum)
  }
  }

  useEffect(() => {newPromptFunc()},[])

  useEffect(() => {
   const timeInt = setInterval(() => {
      setTime((prev) => {
        if(prev>0) return prev -1
      })
    }, 1000)
    return () => {
      clearInterval(timeInt)
    }
  

  },[])

  
  return (
    <>
    
   <p>time:</p>
   <p>{time}</p>
    </>
  )
}

export default App
