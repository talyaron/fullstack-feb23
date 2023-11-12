import React, { useState } from 'react';
import './App.css';


const Circle = ({ color }: { color: string }) => {
  const circleStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: color,
  };

  return <div style={circleStyle}></div>;
};

const ColorPicker = ({ setColor }: { setColor: React.Dispatch<React.SetStateAction<string>> }) => {
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return <input type="color" onChange={handleColorChange} />;
};

const App = () => {
  const [circleColor, setCircleColor] = useState('#000000');

  return (
    <div>
      <Circle color={circleColor} />
      <ColorPicker setColor={setCircleColor} />
    </div>
  );
};

export default App;
