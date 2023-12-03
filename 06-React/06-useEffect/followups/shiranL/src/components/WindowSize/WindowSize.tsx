import React, { useEffect, useState } from 'react';

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    // Add event listener on mount
    console.log('resize works');
    
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect will only run on mount and unmount

  return (
    <div>
      <p>Window Width: {windowSize.width}px</p>
      <p>Window Height: {windowSize.height}px</p>
    </div>
  );
};

export default WindowSize;
