import React from "react";
import './App.css'
import People from './People'

function App() {

   const firstUser = {
    firstName: "Lee",
    age: 20,
    hobbie: "skydive"
  }

  const welcome = "Welcome"

  return (
    <>
        <People first={firstUser.firstName} age={firstUser.age} hobbie={firstUser.hobbie}>
          <p>{welcome}</p>
          <p>bye</p>
        </People>
    </>
  )
}

export default App
