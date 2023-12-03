import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Timer from "./component/Timer";
import UsersCards from "./component/UsersCards";
import React from "react";
import { getAllUsers } from "./api/getsMethod";

function App() {
  const [count, setCount] = useState(0);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    document.title = `clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    document.title = "Welcome";
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [screenSize]);


  return (
    <>
      <p>
        screen size: {screenSize.width}px * {screenSize.height}px
      </p>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <Timer timeOut={30} />

    <UsersCards/>
    </>
  );
}

export default App;
