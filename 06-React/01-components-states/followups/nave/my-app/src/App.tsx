import React, { useState } from 'react';
import './App.css';

type Color = [number, number, number, number];

function App() {
  const [counter, setCounter] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [color, setColor] = useState<Color | undefined>(undefined);
  const [circleColor, setCircleColor] = useState<Color | undefined>(undefined);

  const addOne = () => {
    setCounter(counter + 1);
  }

  const removeOne = () => {
    setCounter(counter - 1);
  }

  const changeName = () => {
    const username = prompt("Add your name!");
    if (username) {
      setText(username);
    } else {
      alert("Please provide a name!");
    }
  }

  const changeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor = event.target.value;
    setColor(selectedColor !== "" ? selectedColor.split(',').map(Number) as Color : undefined);
    setCircleColor(selectedColor !== "" ? selectedColor.split(',').map(Number) as Color : undefined);
  }

  const textStyle = {
    color: color ? `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})` : 'black',
  };

  const circleStyle = {
    backgroundColor: circleColor ? `rgba(${circleColor[0]}, ${circleColor[1]}, ${circleColor[2]}, ${circleColor[3]})` : 'transparent',
  };

  return (
    <div className="App">
      <p style={textStyle}>Hello {text}!</p>
      <p>Count: {counter}</p>
      <button onClick={addOne}>ADD 1</button>
      <button onClick={removeOne}>REMOVE 1</button>
      <button onClick={changeName}>ADD NAME</button>
      <button>
        <label htmlFor="colorInput">ADD COLOR</label>
        <input id="colorInput" type="color" onChange={changeColor} />
      </button>
      <div className="circle" style={circleStyle}></div>
    </div>
  );
}

export default App;
