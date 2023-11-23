import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// create a page that shows a user information. at a button press a prompt will apear and after a user wrtes in it, his name will update.
// another button will prompt the user for birth year, and his age will automaticlly update, make the desgin aplicable to crrent year.
// user can update a profile pick by clicking on it.



function App() {
  // const [a ,setCounterState]=useState(2)
  const [backgroundColor, setBackgroundColor] = useState('pink'); 
  const [username, setUserName] = useState('user');
  const [userAge, setUserAge]= useState('input date')
  
 
 

  // const addOneState=()=>{
  //   setCounterState(a *2)
  // }
  // const removeOneState=()=>{
  //   setCounterState(a /2)
  // }

  const changeColor=(event:any)=>{
    const color= event.target.value
    setBackgroundColor(color); // Update the background color
   console.log(color)
  }
  const updateUserName=()=>{
    let newName:any=prompt(`new name `)
    while(newName===``|| newName===null) {
      return prompt(`enter name`)
    }
    
      setUserName(newName)
  }

  const updateUserAge=(event:any)=>{
    event.preventDefault()
    const birthday=event.target.elements.userBirthday.value
    const birthDate = new Date(birthday);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    console.log(age)
    setUserAge(age.toString())
    
  }


  return (
    
    <div className="App" style={{display:`flex`, flexDirection:`column`, alignItems:`center`}}>
      {/* <p> counter:{a}</p> */}
      <p>Hello {username}</p>

      {/* <button onClick={addOneState}>ADD </button>
      <button onClick={removeOneState}>remove </button> */}
      <button onClick={updateUserName}> update name</button>

      <input type="color" onInput={changeColor} />
      <div className='Circle' style={{height:`10rem`, width:`10rem`, backgroundColor:backgroundColor, borderRadius:`50%`}}> </div>
      

      <form onSubmit={updateUserAge} className='userage'>
        <input type="date" name="userBirthday" id="userBirthday" />
        <button type='submit' >set your age</button>
      </form>

      <p>your age: {userAge}</p>

    </div>
    )
 
}

export default App;
