import React from 'react'
import useTimer from '../customhooks/useTimer'

const timerComponentManualStart:React.FC = () => {

    const { minutes, seconds, milliseconds, isActive, start, stop, reset } = useTimer();

  return (
    <div>
      <p>{`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(
        milliseconds
      ).padStart(3, '0')}`}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop} disabled={!isActive}>
        Stop
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default timerComponentManualStart
