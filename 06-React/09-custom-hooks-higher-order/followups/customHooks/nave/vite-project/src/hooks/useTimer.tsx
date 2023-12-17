import { useState, useEffect } from 'react';
import ms from 'ms';

type TimerProps = {
  autoStart?: boolean;
};

const useTimer = ({ autoStart = false }: TimerProps = {}) => {
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(autoStart);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const stop = () => {
      if (isActive) {
        setIsActive(false);
      }
    };

    const reset = () => {
      setTime(0);
      setIsActive(autoStart);
    };

    if (isActive) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 100);
      }, 100);
    } else {
      clearInterval(intervalId!);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isActive, autoStart]);

  return [ms(time / 1000, { long: false }), ms(time), time, stop, reset] as const;
};

export default useTimer;
