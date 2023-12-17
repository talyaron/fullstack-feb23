import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { animals } from './util/animals'
import AnimalCard from './components/UserCard/AnimalCard'

function App() {
 
  return (
<div className="App">
     {animals.map((animal) => { 
      return <AnimalCard key={animal.name} name={animal.name} type={animal.type} breed={animal.breed} age={animal.age}/>
     })}
</div>
  )
}

export default App
