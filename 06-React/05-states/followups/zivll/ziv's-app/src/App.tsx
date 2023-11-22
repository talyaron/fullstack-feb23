import './App.css'
import User from './components/User'
import { users } from './model/users'
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState<number[]>([users.forEach(user => user.counter)]);



  const increasCounter = (i) => {

    setCounter([...counter, counter[i] + 1]);
  };

  const decreaseCounter = (i) => {
    setCounter([...counter, counter[i] - 1])
  };


  return (

    <div className='users-cards'>
      {users.map((user, i) =>

        <div className="user-card">
          <User name={user.name} lastname={user.lastname} id={user.id} />
          <button onClick={increasCounter} value={i}>+</button>
          <p>counter: {counter}</p>
          <button onClick={decreaseCounter} value={i}>-</button>
        </div>

      )}

    </div>

  )
}

export default App
