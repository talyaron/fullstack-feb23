import React, { useEffect, useState } from 'react'

const initialState = { minutes: 0, seconds: 0, milliseconds: 0 }

const useTime = () => {
    const [time, setTime] = useState(initialState)
    const [isRunning, setInRunning] = useState(false)
    const [intervalId, setIntervalId] = useState<number | undefined>(undefined)

    const startTime = () => {
        if (!isRunning) {
            const interval = setInterval(() => {
                setTime((prevState) => {
                    let milliseconds = prevState.milliseconds + 10
                    let seconds = prevState.seconds
                    let minutes = prevState.minutes

                    if (milliseconds >= 1000) {
                        milliseconds = 0
                        seconds++
                    }

                    if (seconds >= 60) {
                        seconds = 0;
                        minutes++
                    }


                    return { minutes, seconds, milliseconds }
                })
            }, 10)
            setInRunning(true)
            setIntervalId(interval)
        }

    }

    const stopTime = () => {
        if (isRunning) {
            clearInterval(intervalId)
            setInRunning(false)
        }
    }

    const resetTime = () => {
        clearInterval(intervalId)
        setInRunning(false)
        setTime(initialState)
    }

    useEffect(() => {
        return () => {
            clearInterval(intervalId)
        }
    }, [intervalId])


    return { startTime, stopTime, resetTime, milliseconds: time.milliseconds, seconds: time.seconds, minutes: time.minutes }
}

export default useTime