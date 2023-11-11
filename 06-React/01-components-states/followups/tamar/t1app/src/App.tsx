import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [counterState, setCounterState] = useState(0)
  // console.log("component is rendered")
  const [color, setColor] = useState('')  //set a color chang hook
  const [firstName, setFirstName] = useState('gest')
  const [UserAge, setUserAge] = useState(0)
  const currentYear = new Date().getFullYear();
  
  //this block of local storage not work to get it after refresh
  const storedProfileString = localStorage.getItem('Profile')
  let storedProfile;
  if (storedProfileString) {
    const storedProfile = JSON.parse(storedProfileString)
  } else {
    const storedProfile = "personal profile here"
  }
 
  const [profile, setProfile] = useState(storedProfile)


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
    const inputColor = document.getElementById('colour');  //catch the input[type=color] that open the color plait
    if (inputColor) inputColor.click();  //if its not null we do the color change with it
  };

  const handleNameChang = () => {
    const newName = prompt("enter your name")
    if (newName) {
      setFirstName(newName)
    } else {
      alert("must enter your name")
    }
  }

  const handleAge = () => {
    const birthYear: number = Number(prompt("enter your birth year"))
    if (birthYear) {
      const userAge = (currentYear - birthYear)
      setUserAge(userAge)
    } else {
      alert("must enter your name")
    }
  }

  useEffect(() => {
    localStorage.setItem('profile', JSON.stringify(profile))
  }, [profile])

  const handleProfile = (event: any) => {
    const newProfile = event.target.value //get the data from user writing
    if (newProfile) {
      setProfile(newProfile)
    }
    console.log(profile)
  }

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
        <input type="color" id="colour" onChange={handleColorChange} value={color} /> {/*the hidden element that open the color plait*/}
      </span>
      <br></br>
      <h1>Hello {firstName}</h1>
      <button onClick={handleNameChang}>click to enter your name</button>
      <br></br>
      <h2>your Age is: {UserAge}</h2>
      <button onClick={handleAge}>click to enter your birth year</button>
      <br></br>
      <textarea onKeyUp={handleProfile}>{profile}</textarea>
    </div>
  );
}

export default App;
