import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface User {
  id: number;
  name: string;
  lastname: string;
  role?: string;
}

// function useState(initial) {
//   return ["intial", "function thats sets the value"]
// }

// function add() {
// return 1 + 2
// }

// add()

function App() {
  // string
  const [value, setValue] = useState<string | null>("hello");
  // number
  const [num, setNum] = useState<number>(0);

  // object
  const [user, setUser] = useState<User>({
    id: 3,
    name: "gili",
    lastname: "mena",
  });
  // simple array
  const [numArr, setNumArr] = useState<number[]>([1, 2, 3, 4]);
  // complex array
  const [usersArr, setUsersArr] = useState<User[]>([
    { id: 1, name: "gili", lastname: "mena" },
    { id: 2, name: "israel", lastname: "israeli" },
  ]);

  const changeNumber = () => {
    setNum(5);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{value}</p>
        <button
          onClick={() => {
            setValue("hello world!");
          }}
        >
          Change
        </button>

        <p>{num}</p>
        <button onClick={changeNumber}>Change num</button>

        <p>
          {user.name} {user.lastname}
        </p>
        <p>{JSON.stringify(user)}</p>
        <button
          onClick={() => {
            setUser({ id: 4, name: "test", lastname: "testing" });
          }}
        >
          ChangeObject
        </button>
        <button
          onClick={() => {
            setUser({ ...user, name: "test2", role: "admin" });
          }}
        >
          Change only field
        </button>

        {numArr.map((numberInArr, idx) => {
          return <p key={idx}>{numberInArr}</p>;
        })}
        <button
          onClick={() => {
            setNumArr([...numArr, 4]);
          }}
        >
          ADD Num To Array
        </button>
        <button>Remove Num from Array</button>
        {/* TODO: add example to remove from simple array*/}
        {usersArr.map((userInArr) => {
          return (
            <div key={userInArr.id} style={{ border: "1px solid white" }}>
              <p>{userInArr.name}</p>
              <p>{userInArr.lastname}</p>
              <p>{JSON.stringify(userInArr)}</p>
            </div>
          );
        })}
        <button
          onClick={() => {
            setUsersArr([
              ...usersArr,
              { name: "hello", lastname: "world", id: new Date().getTime() },
            ]);
          }}
        >
          Add Object to array
        </button>
        {/* TODO: add example to remove*/}
      </header>

      {num ? <p>num is truthy</p> : <p>num is false</p>}
    </div>
  );
}

export default App;
