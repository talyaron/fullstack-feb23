import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 2);
    setClickCount(clickCount + 1);
  };

  const handleDecrement = () => {
    setCount(count - 2);
    setClickCount(clickCount + 1);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Counter</h5>
        <p className="card-text">{count}</p>
        {count === 0 && (
          <div className="alert alert-info" role="alert">
            Count is zero!
          </div>
        )}
        <div className="btn-group" role="group" aria-label="Counter Controls">
          <button className="btn btn-info" onClick={handleIncrement}>
            Increment
          </button>
          <button className="btn btn-dark mx-2" onClick={handleDecrement}>
            Decrement
          </button>
        </div>
        <p className="mt-3">Button Clicks: {clickCount}</p>
      </div>
    </div>
  );
};

export default Counter;
