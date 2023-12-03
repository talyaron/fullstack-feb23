import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import CountdownTimer from './components/CountdownTimer';
import WindowSize from './components/WindowSize';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${clickCount} times`;
  }, [clickCount]);

  useEffect(() => {
    document.title = 'nave vered';
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

    </>
  );
}

export default App;
