import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialTime: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      // Clear the interval when component unmounts
      return () => {
        clearInterval(interval);
      };
    }
  }, [time]);

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>{time}</p>
    </div>
  );
};

export default CountdownTimer;
