import { useState } from 'react'

const useCounter = (initial=0) => {
    const [counter, setCounter] = useState(initial)

    const handleAddOne = () => {
        setCounter(counter + 1)
    }

  return {counter, handleAddOne}
}

export default useCounter