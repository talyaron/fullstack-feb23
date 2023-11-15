import React, { useState } from 'react';

const ColorPickerCircle: React.FC = () => {
  // State to store the selected color
  const [selectedColor, setSelectedColor] = useState<string>('#000000');

  // Function to handle random color on click
  const handleRandomColor = () => {
    const randomColor = getRandomColor();
    setSelectedColor(randomColor);
  };

  // Helper function to generate a random hex color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  //Display the circle with the selected color 
  return (
    <div>
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: selectedColor,
          cursor: 'pointer', // Add cursor style to indicate it's clickable
        }}
        onClick={handleRandomColor}
      ></div>
    </div>
  );
};

export default ColorPickerCircle;
