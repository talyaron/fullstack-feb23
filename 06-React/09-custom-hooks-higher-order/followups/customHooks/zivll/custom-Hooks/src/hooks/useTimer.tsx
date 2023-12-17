import { useState } from 'react';

const useTimer = (defaultTime = 10) => {
    const [minutes, setMinutes] = useState(defaultTime);
    const [timerInSeconds, setTimerInSeconds] = useState(defaultTime * 60);
    const [seconds, setSeconds] = useState(0);
    // const [miliseconds, setMiliseconds] = useState(0);
    const getMinutes = (): number => {

        if (timerInSeconds > 99) {

            setMinutes(Math.floor(timerInSeconds / 60))
            console.log(minutes)
        } else if (timerInSeconds < 60) {
            setMinutes(0)
            console.log(minutes)

        }
    }
    const getSeconds = (): number => {
        if (timerInSeconds > 99) {
            setSeconds(Math.floor(timerInSeconds % 100))
            console.log(seconds)

        } else if (timerInSeconds > 9) {
            setSeconds(Math.floor(timerInSeconds % 10))
            console.log(seconds)

        }
    }
    // const getMiliseconds = (): number => {
    //     if (timerInSeconds > 99) {
    //         return Math.floor(timerInSeconds / 100)
    //     } else if (timerInSeconds > 9) {
    //         return Math.floor(timerInSeconds / 10)
    //     }
    // }

    const decrement = () => {
        debugger
        setTimerInSeconds(timerInSeconds - 1)
        setMinutes(getMinutes())
        setSeconds(getSeconds())


    };
    return { minutes, seconds, decrement }
}

export default useTimer