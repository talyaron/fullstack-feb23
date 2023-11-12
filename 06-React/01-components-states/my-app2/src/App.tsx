import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState<number>(0);
  const [text, setText] = useState<string>("")

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
  }
  

  return (
    <div className="App">
      <p>Hello {text}!</p>
      <p>count: {counter}</p>
      <button onClick={addOne}>ADD 1</button>
      <button onClick={removeOne}>REMOVE 1</button>
      <button onClick={changeName}>ADD NAME</button>
      <input type="color"/>
    </div>
  );
}

export default App;
