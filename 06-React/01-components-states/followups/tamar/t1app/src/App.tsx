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
    const colorFront = document.getElementById('color_front'); //catch the front element in html we want to chang
    if (colorFront) colorFront.style.backgroundColor = newColor;  //if there is an element and its not null we do the color-chang to it
  };

  const handleColorFrontClick = () => {
    const inputColor =  document.getElementById('colour');  //catch the input[type=color] that open the color plait
    if (inputColor) inputColor.click();  //if its not null we do the color change with it
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
      <span id="color_front" onClick={handleColorFrontClick}> {/* the front element = circle */}
      <input  type="color" id="colour" onChange={handleColorChange} value={color} /> {/*the hidden element that open the color plait*/}
      </span>
    </div>
  );
}

export default App;
