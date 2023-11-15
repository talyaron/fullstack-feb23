import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {

  const [nameState , setNameState] = useState("Ronald Duck")
  const [yearOfBirthState , setYearOfBirthState] = useState(1998)
  const [idNumberState , setIdNumberState] = useState("3242555256")
 function handleChangeName(){
  setNameState( prompt("Enter name:")|| nameState)
 }
 function handleChangeYearOfBirth(){
  setYearOfBirthState( parseInt(prompt("Enter Year Of Birth:")||"0") || yearOfBirthState)
 }
 function handleChangeIdNumber(){
  setIdNumberState( prompt("Enter Year Of Birth:") || idNumberState)
 }
  return (
    <>
     <div className='wrapper'>
      <h1>user info</h1>
      <p className='username'>name: {nameState}</p>
      <button className='changeName' onClick={handleChangeName}>change name</button>
      <p className='age'>age: {new Date().getFullYear() - yearOfBirthState}</p>
      <button className='changeYearOfBirth' onClick={handleChangeYearOfBirth}>change year of birth</button>
      <p className='idNum'>idNumber: {idNumberState}</p>
      <button className='changeIdNumber' onClick={handleChangeIdNumber}>change ID number</button>
     </div>
    </>
  )
}

export default App
