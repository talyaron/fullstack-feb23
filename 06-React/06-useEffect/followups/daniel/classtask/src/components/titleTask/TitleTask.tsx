import { useEffect, useState } from 'react'

// 1. create an effect that run once when the component is mounting only. in that effect, change the title to your name only once.
// 2. create a button, onClick, change the title of the doctument to the amount clicked. make sure the component still gets your name whrn mounting.

const TitleTask = () => {
  const [title,setTitle] = useState("");
  const [counter, setCounter] = useState(0)

  
  useEffect(()=>{
    document.title = `${counter}`
  },[counter])
  
  useEffect(()=>{
    setTitle("hello")
    setTitle(document.title = "Hello Daniel")
  },[])


  return (
    <>
    <p>{title}</p>
    <p>{counter}</p>
  
    <button onClick={()=>setCounter(counter + 1)}>+</button>
    </>
  )
}

export default TitleTask


//why when I change the order of the useEffects when the dom mount I see the number and not the name?