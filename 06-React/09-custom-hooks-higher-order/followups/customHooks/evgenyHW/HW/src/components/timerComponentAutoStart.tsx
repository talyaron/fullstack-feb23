import React from 'react'
import useTimer from '../customhooks/useTimer';

const TimerComponentAutoStart = () => {
  const { minutes, seconds, milliseconds, start, stop, reset } = useTimer(true);

  return (
    <div>
      <p>{`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(
        milliseconds
      ).padStart(3, '0')}`}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};


export default TimerComponentAutoStart
