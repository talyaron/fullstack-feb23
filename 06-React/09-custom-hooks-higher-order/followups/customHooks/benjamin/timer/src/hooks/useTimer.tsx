import React, { useState, useEffect, useRef } from "react";

const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalId = useRef<number | null>(null);

  const start = () => {
    if (intervalId.current === null) {
      intervalId.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 10);
      }, 10); 
    }
  };

  const stop = () => {
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  const reset = () => {
    setTimer(0);
    if (intervalId.current !== null) {
      clearInterval(intervalId.current);
      intervalId.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId.current !== null) {
        clearInterval(intervalId.current);
        intervalId.current = null;
      }
    };
  }, []);

  return { timer, start, stop, reset };
};


export default useTimer;