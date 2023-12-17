import React from 'react'
import { useState, useEffect,useRef } from 'react';

const useTimer = (autoStart = false) => {
    const [time, setTime] = useState({ minutes: 0, seconds: 0, milliseconds: 0 });
    const [isActive, setIsActive] = useState(autoStart);
    const timerRef = useRef<number | null>(null);
  
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          const newMilliseconds = prevTime.milliseconds + 10;
          const newSeconds = prevTime.seconds + Math.floor(newMilliseconds / 1000);
          const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
  
          return {
            minutes: newMinutes,
            seconds: newSeconds % 60,
            milliseconds: newMilliseconds % 1000,
          };
        });
      }, 10);
    };
  
    const stopTimer = () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  
    const startTimerInternal = () => {
      setIsActive(true);
      startTimer();
    };
  
    const resetTimer = () => {
      stopTimer();
      setTime({ minutes: 0, seconds: 0, milliseconds: 0 });
      if (autoStart) {
        startTimerInternal();
      }
    };
  
    const start = () => {
      startTimerInternal();
    };
  
    const stop = () => {
      setIsActive(false);
      stopTimer();
    };
  
    return {
      minutes: time.minutes,
      seconds: time.seconds,
      milliseconds: time.milliseconds,
      isActive,
      start,
      stop,
      reset: resetTimer,
    };
  };
  
  export default useTimer;