import React, { useState } from 'react'

const useCounter = (initial = 0) => {
    const [counter, setCounters] = useState(initial);
    const addTwo = () => {
        setCounters(counter + 2)
    }

    return (
        { counter, addTwo })
}

export default useCounter