import { useEffect } from 'react'
import useTimer from '../hooks/useTimer'
import useTime from '../hooks/useTime'

const Timer = () => {
    const { miliSeconds, seconds, minutes, start, stop,reset } = useTimer()

    // const { startTime, stopTime, resetTime, milliseconds, seconds, minutes } = useTime()

    // useEffect(() => {
    //     start()
    // })
    return (
        <div>
            <button onClick={start} >START</button>
            <button onClick={stop} >STOP</button>
            <button onClick={reset} >RESET</button>


            <p>{minutes < 10 ? `0${minutes}` : `${minutes}`}:{seconds < 10 ? `0${seconds}` : `${seconds}`}:{miliSeconds < 10 ? `0${miliSeconds}` : `${miliSeconds}`}</p>

            {/* <p>hello my <span style={{ fontWeight: 700 }}>name</span> is gili</p> */}

            {/* <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
            <span>{seconds < 10 ? `0${seconds}` : seconds}</span>:
            <span>{milliseconds < 10 ? `00${milliseconds}` : milliseconds < 100 ? `0${milliseconds}` : milliseconds}</span>

            <button onClick={startTime}>START</button>
            <button onClick={stopTime}>STOP</button>
            <button onClick={resetTime}> RESET</button> */}
        </div>
    )
}

export default Timer