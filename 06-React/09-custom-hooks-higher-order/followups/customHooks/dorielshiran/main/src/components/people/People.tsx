import { useState } from "react";
import usePeople from "../../hooks/usePeople";

export const People = () => {
  const { people, handleAddThree } = usePeople();
  return (
    <div>
      {people}
      <button onMouseEnter={handleAddThree}>add 3 people</button>
    </div>
  );
};
