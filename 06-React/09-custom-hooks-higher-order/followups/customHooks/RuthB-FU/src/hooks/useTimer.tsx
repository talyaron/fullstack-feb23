import React, { useEffect, useState } from "react";

const useTimer = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState({ min: 0, sec: 0, ms: 0 });

  useEffect(() => {
    let timer: number | undefined;
    if (isActive) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          let { min, sec, ms } = prevTime;
          ms += 10;
          if (ms == 1000) {
            ms = 0;
            sec += 1;
          }
          if (sec == 60) {
            sec = 0;
            min += 1;
          }
          return { min, sec, ms };
        });
      }, 10);
    } else clearInterval(timer);
    return () => clearInterval(timer);
  }, [isActive]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setTime({ min: 0, sec: 0, ms: 0 });
    setIsActive(false);
  };

  return { time, isActive, startTimer, stopTimer, resetTimer };
};

export default useTimer;
