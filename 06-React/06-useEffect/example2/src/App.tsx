import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getAllUsers } from "./api/userApi";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const [time, setTime] = useState(0);
  const [users, setUsers] = useState([]);

  // let x = 3
  // x++
  const handleAdd = () => {
    setCount(count + 1);
    // setCount((prevState) => prevState + 1)
  };

  // useEffect(() => {
  //   console.log("component rendered");
  // });

  useEffect(() => {
    // component did mount !
    console.log("On app Mounting");
    // document.body.style = "background-color: red;";
  }, []);

  useEffect(() => {
    console.log("on Count Change");
    if (color === "green") {
      setColor("blue");
      console.log(color);
    } else {
      setColor("green");
      console.log(color);
    }
  }, [count]);

  // useEffect(()=>{ //setTimout setInterval AddEventListener
  //   const timeInterval = setInterval(()=>{
  //     setTime((prev) => prev + 1)
  //   },1000)
  //   return () => { //clearTimout clearInterval removeEventListener
  //     clearInterval(timeInterval)
  //   }
  // },[])

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
    <div>
      {count}
      <button style={{ backgroundColor: color }} onClick={handleAdd}>
        ADD
      </button>
      {/* <button onClick={() => {handleAdd()}}>ADD</button> */}
      <p>clock</p>
      <p>{time}</p>
      <div>
        {users.length > 0 &&
          users.map((user) => {
            return <div key={users.id}>{user.name}</div>;
          })}
      </div>
    </div>
  );
}

export default App;
