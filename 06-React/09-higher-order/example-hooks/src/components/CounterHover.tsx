import React from "react";
import useCounter from "../hooks/useCounter";

const CounterHover = () => {
  const { counter, increment, decrement } = useCounter();
  return (
    <div>
      <div onMouseEnter={increment}>Add</div>
      <p>{counter}</p>
      <div onMouseEnter={decrement}>Remove</div>
    </div>
  );
};

export default CounterHover;
