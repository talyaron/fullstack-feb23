import { useState } from 'react'

const useTimer = () => {
    let [miliSeconds, setMiliSeconds] = useState(0)
    let [seconds, setSeconds] = useState(0)
    let [minutes, setMinutes] = useState(0)
    const [run, setRun] = useState(false)
    const [intervalId, setIntervalId] = useState<number | undefined>(undefined)

    const timer = () => {
        if (!run) {
            const interval = setInterval(() => {
                miliSeconds = miliSeconds + 1
                setMiliSeconds(miliSeconds)
                if (miliSeconds == 100) {
                    setMiliSeconds(miliSeconds = 0)
                    seconds = seconds + 1
                    setSeconds(seconds)
                }

                if (seconds == 59) {
                    setSeconds(seconds = 0)
                    setMinutes(minutes + 1)
                }
            }, 10)
            setIntervalId(interval)
            setRun(true)
        }
    }

    const start = () => {
        timer()
    }

    const stop = () => {
        if (run) {

            clearInterval(intervalId)
            setRun(false)
        }
    }

    const reset = () => {
        clearInterval(intervalId)
        setRun(false)
        setMiliSeconds(miliSeconds = 0)
        setSeconds(seconds = 0)
        setMinutes(0)
    }

    return { miliSeconds, seconds, minutes, start, stop, reset }
}

export default useTimer