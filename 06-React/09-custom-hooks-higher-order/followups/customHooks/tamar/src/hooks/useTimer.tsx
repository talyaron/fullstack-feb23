import { useState } from 'react'

const useTimer = () => {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    const handleRunning = () => {
        setRunning((running) => !running)
    }

    const handleReset = () => {
        setTime(0)
    }

    return (
        { time, setTime, running, handleRunning, handleReset })
}


export default useTimer