import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counterState, setCounterState] = useState<number>(0)
  let [text, setText] = useState<string>("")
  const text1 = "Welcome to"
  const style = "hell!"
  let counter = 0
  const addOne = () => {
    counter = counter++ 
    console.log(counter)
  }
  const addOneState = () => {
    setCounterState(counterState + 1) 
    console.log(counterState)
  }
  const removeOneState = () => {
    setCounterState(counterState - 1) 
    console.log(counterState)
  }
  const divideByTwo = () => {
    setCounterState(counterState / 2) 
    console.log(counterState)
  }
  const changeName = () => {
    const userName = prompt("Enter your name")
    if (userName) {
      setText(userName)
    }
    else {
      alert("provide Name!")
    }
    }
  return (
    <div className="App">
        <p>Hello {text}!</p>
        <p>{text1} {style}</p>
        <p>Count : {counter}</p>
        <p>Count State: {counterState}</p>
        <button onClick={addOne}>ADD to COUNTER</button>
        <button onClick={addOneState}>ADD to COUNTER STATE</button>
        <button onClick={removeOneState}>REMOVE from COUNTER STATE</button>
        <button onClick={divideByTwo}>DEVIDE COUNTER STATE by 2</button>
        <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;
