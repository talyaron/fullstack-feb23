import { useState } from "react";
import "./App.css";
import { users } from "./util/users";
import UserCard from "./components/UserCard";
import NavBar from "./components/NavBar";
import { User } from "./types/types";

function App() {
  const [usersArr, setUsers] = useState<any[]>(users);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const addOne = (userId: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === userId) {
          return { ...user, counter: user.counter + 1 };
        } else {
          return user;
        }
      })
    );
  };

  const removeOne = (userId: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === userId && user.counter > 0) {
          return { ...user, counter: user.counter - 1 };
        } else {
          return user;
        }
      })
    );
  };

  return (
    <> 
         <NavBar user={selectedUser} />

             

      {usersArr.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          addOne={() => addOne(user.id)}
          removeOne={() => removeOne(user.id)}
          onSelect={() => setSelectedUser(user)}
          />
      ))}
    </>
  );
}

export default App;