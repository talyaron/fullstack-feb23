import React, { useState } from 'react';

function Hero() {
  const [counter, setCounter] = useState<number>(0);
  const [text, setText] = useState<string>("")
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff"); // צבע הרקע נוסף כמשתנה
  const addOne = () => {
    setCounter(counter + 1)
  }

  function removeOne() {
    setCounter(counter -1)
  }

  const changeName = () => {
    const username = prompt("add your name!")
    if (username){
      setText(username)
    } else {
      alert("please provide name!")
    }
  };
  const changeBackgroundColor = () => {
    const selectedColor = prompt("Choose a background color (e.g., #ff0000):");
    if (selectedColor) {
      setBackgroundColor(selectedColor);
    } else {
      alert("Please provide a valid color!");
    }
  };
  
  return (
    <div>
          
          <div>
      <div className="Form" style={{ backgroundColor }}>
        <p>Hello {text}!</p>
        <p>Count: {counter}</p>
        <button onClick={addOne}>הוסף 1</button>
        <button onClick={removeOne}> הורד 1</button>
        <button onClick={changeName}>הוסף שם </button>
        <button onClick={changeBackgroundColor}>שנה צבע רקע </button>
      </div>
    </div>

     
    </div>
  );
}

export default Hero;