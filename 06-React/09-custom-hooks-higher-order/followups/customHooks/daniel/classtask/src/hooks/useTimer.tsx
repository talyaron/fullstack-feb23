import { useEffect, useState } from "react"

// # medium

// 2. create a custom hook that is called useTimer: and it provides a timer logic. the timer should be able to be started, stoped, and reset, and have minutes, seconds and miliseconds.
//    create two components that use the timer logic: one should be started on mount, the other should not.



const useTimer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);



  useEffect(() => {

    let interval: number | undefined = undefined;

    if (isRunning) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 10)
      }, 10)
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);

  }, [isRunning])


  const startTimer = () => {
    setIsRunning(true)
  }

  const stopTimer = () => {
    setIsRunning(false)
  }

  const resetTimer = () => {
    setCount(0)
  }

  return {
    startTimer,
    stopTimer,
    resetTimer,
    time: {
      minutes: Math.floor(count / 60000),
      seconds: Math.floor((count % 60000) / 1000),
      miliseconds: count % 1000,
    },
  };

};

export default useTimer


