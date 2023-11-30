import './App.css'
import { useEffect, useState} from "react";
import CountdownTimer from './component/CountdownTimer';

function App() {
 const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prevState) => prevState + 1)
  }

  useEffect(() => {
    document.title = `${count}`;
  }, [count])

  useEffect(() => {
    document.title = "Tamar";
  },[])

  return (
    <>
      hello
      <button onClick={handleAdd}>
        ADD</button>
      <CountdownTimer/>
    </>
  )
}

export default App
