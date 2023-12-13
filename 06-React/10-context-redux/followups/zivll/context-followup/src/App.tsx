import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { UserContext } from './contexts/userContext';

function App() {
  const [user, setUser] = useState();

  async function getUser(ev: React.FormEvent<HTMLFormElement>) {
    try {
      console.log(ev);

      console.log((ev.target as HTMLInputElement).userNumber.value);
      ev.preventDefault();
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${(ev.target as HTMLInputElement).userNumber.value}`);
      console.log(data);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  }
  // useEffect(() => {
  //   getUser()
  // }, [])

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <form onSubmit={getUser}>
          <input type="number" name="userNumber" id="userNumber" placeholder='insert user number' />
          <input type="submit" value="ADD" />
        </form>
        <Card />
      </UserContext.Provider>
    </>
  )
}

export default App
