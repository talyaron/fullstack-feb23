import React, { FC, useEffect, useState } from 'react'

interface CountdownTimerProps {
    initialTimer: number,
}

const CountdownTimer :FC<CountdownTimerProps>= ({initialTimer}) => {
const [timer, setTimer] = useState(initialTimer);
const handellPick = () => {
    //get num from user
    const userNum = prompt('please enter a number');
    //parse the num
    const parsedNum = parseInt(userNum);
    //set the num to the timer
    setTimer(parsedNum);
  
    }
useEffect(() => {
    // Use setInterval to decrement the timer every second
    const intervalId = setInterval(() => {
      // If timer is greater than 0, decrement it
      if (timer > 0) {
        setTimer((prevTimer) => prevTimer - 1);
      } else {
        // If timer reaches 0, clear the interval
        clearInterval(intervalId);
      }
    }, 1000);
    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [timer]);

  return (
    <div>
       <p>Countdown: {timer}</p>
       <button onClick={handellPick}>pick a timer number</button>
    </div>
  )
}

export default CountdownTimer
