import { useEffect, useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import useTimer from './hooks/useTimer';

function App() {
  const defaultTime = 10 * 60;
  const { decrement } = useTimer();
  const [timerInSeconds, setTimerInSeconds] = useState(defaultTime);

  useEffect(() => {
    const interval = setInterval(() => {
      decrement(setTimerInSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [decrement]);

  const minutes = Math.floor(timerInSeconds / 60);
  const seconds = timerInSeconds % 60;

  return (
    <>
      <Timer minutes={minutes} seconds={seconds} />
    </>
  );
}

export default App;
