import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [initialTitle, setInitialTitle] = useState('shiran');

  const handleAdd = () => {
    setCount(count + 1);
    setInitialTitle(`Clicked ${count + 1} times`);
    // setCount((prevState) => prevState + 1)
  };
 // Effect to change the document title once on component mount
 useEffect(() => {
  console.log('Component mounted');
  document.title = 'Your Name'; // Replace 'Your Name' with your actual name
}, []); // Empty dependency array means this effect runs only once on mount

// Effect to update the document title when count changes
useEffect(() => {
  console.log('on Count Change');

}, [count]);

  return (
    <>
     <>
      <div className='main'>
      <p id='count-display'>{initialTitle}</p>
        <button onClick={handleAdd}>Click me</button>
      </div>
    </>
    

    </>
  )
}

export default App
