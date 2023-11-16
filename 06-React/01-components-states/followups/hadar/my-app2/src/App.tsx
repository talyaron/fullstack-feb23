import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

const [counter, setCounter] = useState<number>(1);
const [text, setText] = useState<string>("");
const [color, setColor] = useState ("")
const [age, setAge] = useState<number>(0);

const multiply2 = () => {
  setCounter(counter*2)
}

const changeName = () => {
  const name = prompt("add your name please")
  if (name){
    setText(name)
  } else {
    alert("Please provide your name")
  }
}

const calculateAge = () => {
  const addYear= Number(prompt("add your birthday year"))
  const currentYear = new Date().getFullYear();
  const myAge= currentYear-addYear
  setAge(myAge)

}



  return (
    <div className="App">
      <p>Hello {text} </p>
      <p>count: {counter}</p>
      <button onClick= {multiply2}>MULTIPLY 2</button>
      <button onClick= {changeName}>ADD NAME</button>
      <div style={{backgroundColor:color}} className="circle">
      <input type="color" value={color} onChange={(e)=> setColor(e.target.value)}/>
      </div>
      <button onClick={calculateAge}> ADD BIRTH YEAR</button>
      <p>your age:{age}</p>
      
    </div>
  );
}

export default App;
