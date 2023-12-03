import { useState, useEffect } from 'react';

function ScreenSize() {
  const [size, setSize] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    setSize({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, []); 

  return (
    <div>
      <p>
        Height: <strong>{size.winHeight}</strong>
      </p>
      <p>
        Width: <strong>{size.winWidth}</strong>
      </p>
    </div>
  );
}

export default ScreenSize;
