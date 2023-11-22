import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface User {
  id: number;
  name: string;
  lastname: string;
}

function App() {
  // string
  const [value, setValue] = useState<string>("hello");
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

  return (
    <div className="App">
      <header className="App-header">
        <p>{value}</p>
        <p>{num}</p>
        <p>
          {user.name} {user.lastname}
        </p>
        <p>{JSON.stringify(user)}</p>
        {numArr.map((numberInArr, idx) => {
          return <p key={idx}>{numberInArr}</p>;
        })}
        {usersArr.map((userInArr) => {
          return (
            <div key={user.name} style={{ border: "1px solid white" }}>
              <p>{userInArr.name}</p>
              <p>{userInArr.lastname}</p>
              <p>{JSON.stringify(userInArr)}</p>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
