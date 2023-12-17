import React from 'react';
import useTimer from '../../hooks/useTimer';

type TimerComponentProps = {
  autoStart?: boolean;
};

const TimerComponent: React.FC<TimerComponentProps> = ({ autoStart = false }) => {
  const timerValues = useTimer({ autoStart });
  const [minutes, seconds, milliseconds, start, stop, reset] = timerValues;

  return (
    <div>
      <h1>Timer:</h1>
      <p>{`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default TimerComponent;
