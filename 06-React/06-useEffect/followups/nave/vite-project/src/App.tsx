import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import CountdownTimer from './components/CountdownTimer';
import WindowSize from './components/WindowSize';
import { getAllUsers } from './api/UserCard'
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    document.title = `Clicked ${clickCount} times`;
  }, [clickCount]);

  useEffect(() => {
    document.title = 'nave vered';
  }, []);
  const handleGetUsers = async () => {
    try {
      const response = await getAllUsers();
      console.log(response);
      setUsers(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="react logo" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setClickCount(clickCount + 1)}>
          Click on me to change the title
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <CountdownTimer initialTime={60} /> {}
      <WindowSize />
      <div>
        {users.length > 0 &&
          users.map((user) => {
            return <div key={user.id}>{user.email}  ||  {user.name}</div>;
          })}
      </div>

    </>
  );
}

export default App;
