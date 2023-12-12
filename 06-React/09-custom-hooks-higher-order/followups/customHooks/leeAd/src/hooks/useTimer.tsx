import { useState, useEffect } from "react";

const useTimer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval: number | null = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval!);
    }

    return () => clearInterval(interval!);
  }, [timerOn]);

  const startTimer = () => {
    setTimerOn(true);
  };

  const stopTimer = () => {
    setTimerOn(false);
  };

  const resumeTimer = () => {
    setTimerOn(true);
  };

  const resetTimer = () => {
    setTime(0);
    setTimerOn(false);
  };

  return {
    time,
    timerOn,
    startTimer,
    stopTimer,
    resumeTimer,
    resetTimer,
  };
};

export default useTimer;
