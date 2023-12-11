import { useState } from "react";

const useMoney = (initial = 0) => {
  const [money, setMoney] = useState(initial);

  const handleAddTwo = () => {
    return setMoney(money + 2);
  };

  return { money, handleAddTwo };
};

export default useMoney;
