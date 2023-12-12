import useTimer from '../../hooks/useTimer'
import { useEffect } from 'react';

const TimerOnClick = () => {
    const { time, setTime, running, handleRunning, handleReset } = useTimer()

    useEffect(() => {
        let interval: number | undefined;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime: number) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [running]);


    return (
        <div>
            <h2>Timer ON-Click</h2>
            <div>
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span> {/* the minutes */}
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span> {/* the seconds */}
                <span>{("0" + ((time / 10) % 100)).slice(-2)}:</span> {/* the miliseconds */}
            </div>
            {running ? <button onClick={handleRunning}>STOP TIMER</button> : <button onClick={handleRunning}>START TIMER</button>}

            <button onClick={handleReset}>RESET TIMER</button>
        </div>
    )
}

export default TimerOnClick