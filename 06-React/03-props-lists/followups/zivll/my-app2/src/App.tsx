import React from 'react';
import logo from './logo.svg';
import './App.scss';
import AnimalCard from './components/animal-card/AnimalCard';
import { animals } from './utilities/animals';
import Button from './components/button/Button';

function App() {
  return (
    <div className="App">
      <div className="cards">
        {animals.map((animal) => { return <AnimalCard key={animal.name} type={animal.type} name={animal.name} age={animal.age} /> })}
      </div>
    </div>
  );
}

export default App;
