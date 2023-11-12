import React, { useState, useEffect } from 'react';
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
    const selectedColor = e.target.value;
    setColor(selectedColor);
    localStorage.setItem('selectedColor', selectedColor);
  };

  return <input type="color" onChange={handleColorChange} />;
};

const App = () => {
  const [circleColor, setCircleColor] = useState<string>(() => {
    const savedColor = localStorage.getItem('selectedColor');
    return savedColor || '#000000';
  });

  useEffect(() => {
    localStorage.setItem('selectedColor', circleColor);
  }, [circleColor]);

  return (
    <div>
      <Circle color={circleColor} />
      <ColorPicker setColor={setCircleColor} />
    </div>
  );
};

export default App;
