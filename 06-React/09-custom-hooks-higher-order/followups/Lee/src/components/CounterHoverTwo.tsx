import useCounter from "../hooks/useCounter";

const CounterHoverTwo = () => {
  const { counter, handleAddTwo } = useCounter(0);

  return (
    <div>
      {counter}
      <button onMouseEnter={handleAddTwo}>+</button>
    </div>
  );
};

export default CounterHoverTwo;
