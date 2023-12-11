import { useState } from 'react'

const useCounterTwo = (initial = 0) => {
    const [counter2, setCounter2] = useState(initial)

    const handleAddTwo = () => {
        setCounter2(counter2 + 2)
    }

    return { counter2, handleAddTwo }
}

export default useCounterTwo