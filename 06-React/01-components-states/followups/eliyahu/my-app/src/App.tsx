import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [counter, setCounter] = useState<number>(0)
  let [color, setColor] = useState<any>('')

  const addOne = () => {
    setCounter(counter + 1)
  }

  const removeOne = () => {
    setCounter(counter - 1)
  }

  const multiply = () => {
    setCounter(counter * 2)
  }

  const devide = () => {
    setCounter(counter / 2)
  }

  
  const changeColor = () => {
    const pickerColor = document.querySelector('#pc') as HTMLInputElement
    if (pickerColor) {
      const x = pickerColor.value
      
      setColor(color = x)
    }
  }
  
  const reset = () => {
    setCounter(counter = 0)
    setColor(color = '')
  }

  return (
    <div className='App'>

      <p>count: {counter}</p>
      <button onClick={addOne}>+1</button>
      <button onClick={removeOne}>-1</button>
      <button onClick={multiply}>X2</button>
      <button onClick={devide}>/2</button>
      <input type="color" onChange={changeColor} id='pc' />
      <button onClick={reset}>Reset</button>

      <div style={{ border: '2px solid black', margin: 'auto', height: '100px', width: '100px', borderRadius: '50%', backgroundColor: color }}></div>
    </div>
  )
}

export default App;
