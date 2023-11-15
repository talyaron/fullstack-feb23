import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { count } from "console";

function App() {
  const [counter, setCounter] = useState(0);
  const addOne = () => {
    setCounter(counter + 1);
  };
  const removeOne = () => {
    setCounter(counter - 1);
  };
  const multiply = () => {
    setCounter(counter * 2);
  };
  const divide = () => {
    setCounter(counter / 2);
  };
  return (
    <div className="App">
      <p>counter: {counter}</p>
      <button onClick={addOne}>Add 1</button>
      <button onClick={removeOne}>Remove one</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>divide by 2</button>
    </div>
  );
}

export default App;
