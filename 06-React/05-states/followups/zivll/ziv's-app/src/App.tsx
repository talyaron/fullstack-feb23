import './App.css'
import User from './components/User'
import { users } from './model/users'
import { useState } from 'react';

function App() {
  interface MyObject {
    count: number;
  }
  const createArrayOfObjects = (length: number): MyObject[] => {
    const newArray: MyObject[] = new Array(length)
      .fill({}).map(() => ({ count: 0 }));
    return newArray;
  }

  const [counter, setCounter] = useState<MyObject[]>(createArrayOfObjects(users.length));

  const increasCounter = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const updatedCounter = [...counter];
    updatedCounter[Number(ev.currentTarget.value)].count += 1;
    setCounter(updatedCounter);
  };

  const decreaseCounter = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const updatedCounter = [...counter];
    updatedCounter[Number(ev.currentTarget.value)].count -= 1;
    setCounter(updatedCounter);
  };

  const [userName, setUserName] = useState<string>("")
  const setUserNameFunction = (ev: React.MouseEvent<HTMLButtonElement>) => {
    // debugger
    const un = ev.currentTarget.value;
    setUserName(un)
  };
  return (
    <div className="header">
      hello {userName}
      <div className='users-cards'>
        {users.map((user, i) =>
          <button onClick={setUserNameFunction} value={user.name} className='btn-user-name'>
            <div className="user-card">

              <User key={user.id} name={user.name} lastname={user.lastname} id={user.id} counter={0} />
              {/* {setUserNameFunction(user.name)} */}
              <button onClick={increasCounter} value={i}>+</button>
              <p>counter: {counter[i].count}</p>
              {/* <button onClick={increasCounter}></button> */}
              <button onClick={decreaseCounter} value={i}>-</button>
              {/* <button onClick={setUserNameFunction} value={user.name}></button> */}
            </div>
          </button>

        )}
      </div>
    </div>

  )
}

export default App