import React, { useEffect, useState } from 'react'
import useTimer from '../hooks/useTimer'

const Timer = () => {
    // const [timerNumber, setTimerNumber] = useState(0)
    const { minutes, seconds, decrement } = useTimer()
    // const handleInput = (ev: React.FormEvent<HTMLFormElement>) => {
    //     setTimerNumber(Number((ev.target as HTMLInputElement).value))
    // }
    useEffect(() => {
        setInterval(() => { decrement() }, 1000)
    }, [])

    return (
        <div>
            {/* <form onInput={handleInput}>
                <input type="number" name="timerStartNumber" id="timerStartNumber" placeholder='please choose a number' />
            </form> */}
            <p>{minutes} : {seconds}</p>
        </div>
    )
}

export default Timer