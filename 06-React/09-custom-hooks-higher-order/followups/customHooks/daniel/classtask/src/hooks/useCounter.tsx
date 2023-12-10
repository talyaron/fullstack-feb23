import { useState } from 'react'

const useCounter = () => {
    const [counter, setCounter] = useState(0)

    const handleAddTwo = ()=>{
        setCounter(counter + 2)
    }

  return {counter, handleAddTwo}
}

export default useCounter