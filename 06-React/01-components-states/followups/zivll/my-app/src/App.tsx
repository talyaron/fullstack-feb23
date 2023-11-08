import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [multiplyCounter, setMultiplyCounter] = useState(2);
  const addOne = () => {
    setCounter(counter + 1);
  };
  const multiply = () => {
    setMultiplyCounter(multiplyCounter * counter);
    console.log(multiplyCounter);
  };
  return (
    <div className="App">
      <p>counter: {counter}</p>
      <button onClick={addOne}>Add 1</button>
      <button onClick={multiply}>Multiply</button>
    </div>
  );
}

export default App;
