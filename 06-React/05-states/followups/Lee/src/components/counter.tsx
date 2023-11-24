import React, { useState } from "react";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSub = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <div style={{ fontSize: "120%" }}>{counter}</div>
      <div className="buttons">
        <button
          style={{
            fontSize: "60%",
            marginRight: "5px",
            backgroundColor: "green",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={handleAdd}
        >
          Increment
        </button>
        <button
          style={{
            fontSize: "60%",
            marginLeft: "5px",
            backgroundColor: "red",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={handleSub}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;