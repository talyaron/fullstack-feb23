import { useEffect } from 'react'
import useTimer from '../../../hooks/useTimer'

const OnMount = () => {
  const timer = useTimer();

  useEffect(() => {
    timer.startTimer();
    return timer.stopTimer;

  }, [])

  return (
    <>
      <h1>On Mount</h1>
      <button onClick={timer.startTimer}>Start</button>
      <button onClick={timer.stopTimer}>Stop</button>
      <button onClick={timer.resetTimer}>Reset</button>
      <p>Time: {String(timer.time.minutes).padStart(2, '0')}:{String(timer.time.seconds).padStart(2, '0')}:{String(timer.time.miliseconds).padStart(3, '0')}</p>
    </>
  )
}

export default OnMount