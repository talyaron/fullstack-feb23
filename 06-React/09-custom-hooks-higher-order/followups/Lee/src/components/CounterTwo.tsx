import useCounter from "../hooks/useCounter";

const CounterTwo = () => {
  const { counter, handleAddTwo } = useCounter(0);

  return (
    <div>
      {counter}
      <button onClick={handleAddTwo}>+</button>
    </div>
  );
};

export default CounterTwo;
