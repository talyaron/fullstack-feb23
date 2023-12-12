import { useState } from "react";

const useCounter = (initial = 0) => {
  const [counter, setCounter] = useState(initial);

  const handleAddTwo = () => {
    setCounter(counter + 2);
  };

  return { counter, handleAddTwo };
};

export default useCounter;
