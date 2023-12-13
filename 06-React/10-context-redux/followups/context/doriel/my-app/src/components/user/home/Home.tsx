// Home.tsx
import React from "react";
import { useUser } from "../UserContext";
import Container from "../../card/Container";

const Home: React.FC = () => {
  // const { addUser } = useUser();
  const { users, addUser } = useUser();
  const handleAddUser = () => {
    const newUser = {
      id: Date.now(),
      name: `User${Date.now()}`,
    };
    addUser(newUser);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleAddUser}>Add User</button>
      <Container />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
