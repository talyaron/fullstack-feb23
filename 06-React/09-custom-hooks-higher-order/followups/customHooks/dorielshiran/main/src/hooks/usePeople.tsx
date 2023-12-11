import { useState } from "react";

const usePeople = (initial = 0) => {
  const [people, setPeople] = useState(initial);

  const handleAddThree = () => {
    return setPeople(people + 3);
  };

  return { people, handleAddThree };
};

export default usePeople;
