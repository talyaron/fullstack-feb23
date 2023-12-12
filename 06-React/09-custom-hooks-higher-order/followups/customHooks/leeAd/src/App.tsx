// App.tsx
import React from "react";
import "./App.css";
import useTimer from "./hooks/useTimer";

const App: React.FC = () => {
  const { time, timerOn, startTimer, stopTimer, resumeTimer, resetTimer } =
    useTimer();

  return (
    <div className="App">
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {!timerOn && time === 0 && (
          <button
            className="start"
            onClick={() => {
              startTimer();
            }}
          >
            Start
          </button>
        )}

        {timerOn && (
          <button
            className="stop"
            onClick={() => {
              stopTimer();
            }}
          >
            Stop
          </button>
        )}

        {!timerOn && time !== 0 && (
          <button
            className="resume"
            onClick={() => {
              resumeTimer();
            }}
          >
            Resume
          </button>
        )}

        {!timerOn && time > 0 && (
          <button
            className="reset"
            onClick={() => {
              resetTimer();
            }}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
