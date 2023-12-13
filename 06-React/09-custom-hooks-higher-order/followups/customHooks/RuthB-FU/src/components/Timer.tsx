import React, { useEffect } from "react";
import useTimer from "../hooks/useTimer";

const TimerOnMount = () => {
  const { time, isActive, startTimer, stopTimer, resetTimer } = useTimer();
  return (
    <div>
      <h1>Timer:</h1>
      <div className="timer">
        <span>{time.min.toString().padStart(2, "0")}</span>  :  <span>{time.sec.toString().padStart(2, "0")}</span>  :  <span>{time.ms.toString().padStart(3, "0")}</span>
      </div>
      <button onClick={isActive? stopTimer : startTimer}>{isActive ? "stop" : "start"}</button>
      <button onClick={resetTimer}>reset</button>
    </div>
  );
};

export default TimerOnMount;
