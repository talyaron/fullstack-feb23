import {useState} from 'react'

const useCounter = (initial=0) => {
    const [counter,setCounter]= useState(initial)

    const handleAddone=()=>{
      setCounter(counter+1)
    }
  return {counter,handleAddone}
}


export default useCounter
