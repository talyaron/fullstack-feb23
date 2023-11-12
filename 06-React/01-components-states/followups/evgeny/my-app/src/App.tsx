import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [a ,setCounterState]=useState(2)



  const addOneState=()=>{
    setCounterState(a *2)
  }
  const removeOneState=()=>{
    setCounterState(a /2)
  }

  const changeColor=()=>{
    
  }
  return (
    <div className="App">
      <p> counter:{a}</p>

      <button onClick={addOneState}>ADD </button>
      <button onClick={removeOneState}>remove </button>
      <input type="color" onChange={changeColor} />
    </div>)
 
}

export default App;
