import { useState } from "react";
import "./App.css";
import { PhotoshopPicker } from "react-color";

function App() {
  const [color, setColor] = useState("#ff0000");
  return (
    <div className="color-picker">
      <PhotoshopPicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.hex);
        }}
      />
      <div className="color-box"
        style={{
          backgroundColor: color,
        }}
      >
       <h2> My color box</h2>
      </div>
    </div>
  );
}

export default App;
