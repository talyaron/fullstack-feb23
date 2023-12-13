import './App.css'
import axios from 'axios';
import { useState } from 'react';
import { UserContext } from './contexts/userContext';
import Container from './compunent/Container';

function App() {
  const [user, setUser] = useState();

  async function addUser() {
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <button onClick={addUser}>Add User To Context</button>
      <UserContext.Provider value={{ user, setUser }}>
        <Container />
      </UserContext.Provider>
    </>
  )
}

export default App
