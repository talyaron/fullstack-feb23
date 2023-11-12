import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [myCounter, setmyCounter] = useState(0)
  const [circleColor, setPickedColor] = useState('red');
  const [name, setName] = useState("shiran");

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPickedColor(e.target.value);
  };

  const addOne = () => {
    setmyCounter(myCounter + 1)
     console.log(myCounter)
   }

   const chengeName = () => {
    setName(prompt("enter your name") || "shiran")
     
   }

   //create a circle
  return (
    <div className="App">
      <div className="App-count">
        <div>hello! my name is  {name}</div>
        <div>my counter is {myCounter}</div>
        <button onClick={addOne}>ADD 1</button>
      </div>
      <div className="App-circle" id='my-circle' style={{ backgroundColor: circleColor }}>
      </div>
      <input type="color" value={circleColor} onChange={handleColorChange} />
      <button onClick={chengeName}>change name</button>
    </div>
  
  );
}

export default App;
