import React, { useState } from 'react';
import logo from './logo.svg';
import Photo from './Photo';
import { Fragment } from 'react';
import './App.css';


//begginer && medium
function App() {
  const [counter, setCounter] = useState<number>(5);

  const [color, setColor] = useState("")

  const multiply = () => {
    setCounter(counter * 2)
  }

  const changeColor = (e: any) => {
    const color = e.target.value;
    setColor(color)
  }

  return (
    <>
    <div className="App">
      <h1>Task-begginer && medium</h1>
      <p>count: {counter}</p>
      <button onClick={multiply}>Multiply * 2</button>
      <div style={{ backgroundColor: color, border: color }} className='circle'>
        <input type="color" value={color} onChange={changeColor} />
      </div>
    </div>
    </>
  );
}

export default App;




//Advanced-user information
export function UserInfo() {
  const initialState = {
    name: '',
    age:0
  }
  const [text, setText] = useState(initialState.name)
  const [year, setYear] = useState(initialState.age)
  const [person, setPerson] = useState({
    profile: {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2PyMT3lQr27LfNSmPfP0y9uGZ06g9vRpEw&usqp=CAU',
    }
  })

  const changeName = () => {
    const username = prompt("Please add your name:")
    if (username) {
      setText(username[0].toUpperCase() + username.slice(1))
    } else {
      alert("please provide name!")
    }
  }

  const resetState = ()=> {
    setText(initialState.name)
    setYear(initialState.age)
  }

  const returnTheAge = () => {
    const typeAge = Number(prompt("Please add your year of birth:"))
    const currentYear = new Date().getFullYear()
    if (typeAge < currentYear && typeAge > 0) {
      const year = currentYear - typeAge
      setYear(year)
    } else {
      alert("Enter the year that you Born")
    }
  }

  const handleChangeImg = (e: any) => {
    setPerson({
      ...person,
      profile: {
        ...person.profile,
        image: e.target.value
      }
    })
  }
  return (
    <>
    <div className="UserInfo">
      <h1>User Information:</h1>
      <button onClick={changeName}>Name</button>
      <button onClick={returnTheAge}>Year of birth</button>
      <br />

      <p>Hello {text}!</p>
      <p>Your age is: {year}</p>
      <button onClick={resetState}>Reset to initial state</button>
      <br />
      <p><h2>Profile pic:</h2>

        <label>
          Img:
          <input value={person.profile.image}
            onChange={handleChangeImg} />
        </label>
        <br />
        <br />
        <img src={person.profile.image} /></p>
      <br />
      <section className='Photo'>
      <Photo />
      <Photo />
      <Photo />
      </section>
      <br />
      <br />
    </div>
    </>
  );
}











