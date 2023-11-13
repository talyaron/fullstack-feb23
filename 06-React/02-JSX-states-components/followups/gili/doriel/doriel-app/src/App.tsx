import { useEffect, useState } from "react";
import "./App.css";
import Article from "./components/Article/Article";

function App() {
  
  //task 2
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const updatePosition = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    console.log("red dot")
    document.addEventListener("mousemove", updatePosition);
    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div className="box-wrapper">
      <div
        className="red-div"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <Article />
      <Article />
      <Article />
    </div>
  );
}

export default App;
