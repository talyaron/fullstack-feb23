import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counterState, setCounterState] = useState(0)
  console.log("component is rendered")

  const addOneState = () => {
    setCounterState(counterState + 1)
    console.log(counterState)
  }

  const removeOneState = () => {
    setCounterState(counterState - 1)
    console.log(counterState)
  }

  const multiplyByTwo = () => {
    setCounterState(counterState * 2)
    console.log(counterState)
  }

  const divideByTwo = () => {
    setCounterState(counterState / 2)
    console.log(counterState)
  }

  return (
    <div className="App">
      <p>count State: {counterState}</p>
      <button onClick={addOneState}>ADD ONE</button>
      <button onClick={removeOneState}>REMOVE 1</button>
      <button onClick={multiplyByTwo}>Multipl BY Two</button>
      <button onClick={divideByTwo}>Divide By Two</button>
      <div id="circle" style={}></div>
    </div>
  );
}

export default App;
