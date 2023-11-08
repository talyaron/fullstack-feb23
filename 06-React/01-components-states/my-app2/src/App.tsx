import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counterState, setCounterState] = useState(0)
  const text = "my name is gili"
  let counter = 0;
  console.log("component is rendered")

  const addOne = () => {
    counter++
    console.log(counter)
  }
  const addOneState = () => {
   setCounterState(counterState + 1)
    console.log(counterState)
  }

  return (
    <div className="App">
      <p>Hello! {text}</p>
      <p>count: {counter}</p>
      <p>count State: {counterState}</p>
      <button onClick={addOne}>ADD</button>
      <button onClick={addOneState}>ADD To state</button>
    </div>
  );
}

export default App;
