import useMoney from "../../hooks/useMoney";
import "./money.css";

export const Money = () => {
  const { money, handleAddTwo } = useMoney();
  return (
    <div>
      {money}
      <button onClick={handleAddTwo}>add 2 $</button>
    </div>
  );
};
