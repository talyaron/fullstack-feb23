import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState("guest")
  const [userNumber, setUserNumber] = useState(0)
  const setUserName = () => {
    const userName = prompt("what is your name?");
    if (userName === null) alert("Please enter your name");

    else { setTitle(userName) }
    // return userName;
  };
  const amountOfClicks = () => {
    setCount((prev) => prev + 1)
  }
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setUserNumber((prev: number) => {
        if (prev > 0) {
          return prev - 1;
        }
        return prev;
      });
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  const setCountDown = () => {
    const userNumber = Number(prompt("please choose a number"));
    if (userNumber === null || userNumber <= 0) alert("you have to choose a number, and the number have to be greater than 0")
    else {
      setUserNumber(userNumber)
    }
  }
  return (
    <>
      <div className="body">
        <h1>welcome {title}, you clicked on the button {count} times</h1>
        <h2>Time Remaining: {userNumber}</h2>
        <button onClick={setUserName}>your name?</button>
        <button onClick={amountOfClicks}>click button</button>
        <button onClick={setCountDown}>choose a number to start a count down</button>

      </div>
    </>
  )
}

export default App
