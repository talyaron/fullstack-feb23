import React from 'react';
import logo from './logo.svg';
import './App.scss';
import animals from './util/Animal';
import AnimalCard from './components/animalCard/AnimalCard';
import users from './util/User'
import Button from './components/button/Button'
import Counter from './components/counter/Counter'



function App() {
  return (
    <div className="App">
      {/* Task three */}
      <div className='animal'>
      {animals.map(animal =>{
  
        return(
          <AnimalCard backgroundColor={animal.style.backgroundColor}
           borderRadius={animal.style.borderRadius}>
            <div>
              <h1>Name: {animal.name}</h1>
              <p>Type: {animal.type}</p>
              <p>Age: {animal.age}</p>
            </div>
          </AnimalCard>
        )
      })}
      </div>
      <br />
      <br />
      {/* Task four */}
      <div className='button'>
        {users.map(user => {
          return(
            <Button color='#ac4d4d' username={user.username}>
              <p>Id: {user.id}</p>
              <p>name: {user.name}</p>
              <p>email: {user.email}</p>
              <p>phone: {user.phone}</p>
              <p>website: {user.website}</p>
              <p>age: {user.age}</p>
            </Button>
          )
        })}
      </div>
      <br />
      <br />
      {/* Task six */}
      <div className='counter'>
        <h1>Counter</h1>
    <Counter />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
