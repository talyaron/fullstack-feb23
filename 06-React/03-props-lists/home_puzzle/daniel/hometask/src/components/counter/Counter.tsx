// - create a counter component. the counter can add 1 or remove 1. there is also a global counter in the app component. each +1 and -1 in the counter components, will add or subtract from main counter.
import React,{useState} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [globalCount, setGlobalCount] = useState(0);

    const addOne = ()=>{
        setCounter(counter  + 1)
    }

    const removeOne = ()=>{
        setCounter(counter - 1)
    }

    const addToGlobal = () =>{
        setGlobalCount(globalCount + 1)
    }

    const removeToGlobal = () =>{
        setGlobalCount(globalCount - 1)
    }
  return (
    <div>
        <p>Calculator: {counter}</p>
        <p>Global Calculator: {globalCount}</p>
        <button  onClick={()=> (addOne(),addToGlobal())}>Add 1</button>
        <button onClick={()=> (removeOne(), removeToGlobal())}>Remove 1</button>
    </div>
  )
}

export default Counter