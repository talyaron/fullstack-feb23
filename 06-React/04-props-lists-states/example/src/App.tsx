import { useState } from "react";

import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("red");
  const [size, setSize] = useState(1);
  const handleColorChange = () => {
    setColor("blue");
  };

  const handleSize = () => {
    setSize(2);
  };

  return (
    <div
      style={{
        width: "500px",
        border: "1px solid black",
        backgroundColor: color,
      }}
    >
      <p>{color}</p>
      <p>{size}</p>

      <Button handleClick={handleColorChange} />
      <Button handleClick={handleSize} />
    </div>
  );
}

export default App;
