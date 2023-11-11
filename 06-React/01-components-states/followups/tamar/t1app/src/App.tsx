import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counterState, setCounterState] = useState(0)
  console.log("component is rendered")
  const [color, setColor] = useState('')  //set a color chang hook

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

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;  //get the color data from user
    setColor(newColor);
    const colorFront = document.getElementById('color_front');
    if (colorFront)
    colorFront.style.backgroundColor = newColor;
  };

  const handleColorFrontClick = () => {
    const inputColor =  document.getElementById('colour');
    if (inputColor) inputColor.click();
  };

  return (
    <div className="App">
      <p>count State: {counterState}</p>
      <button onClick={addOneState}>ADD ONE</button>
      <button onClick={removeOneState}>REMOVE 1</button>
      <br></br>
      <button onClick={multiplyByTwo}>Multipl BY Two</button>
      <button onClick={divideByTwo}>Divide By Two</button>
      <br></br>
      <span id="color_front" onClick={handleColorFrontClick}>
      <input  type="color" id="colour" onChange={handleColorChange} value={color} />
      </span>
    </div>
  );
}

export default App;
