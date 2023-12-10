import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";

const ConterOnHover = () => {
//   const [counter, setCounter] = useState(0);

//   const handleAddOne = () => {
//     setCounter(counter + 1);
//   };
// const [firstName, setFirstName] = useState("gili")
const {counter, handleAddOne} = useCounter(10)

  return (
    <div>
      {counter}
      <button onMouseEnter={handleAddOne}>+</button>
      {/* {firstName} */}
      {/* <input type="text" value={firstName} onInput={(ev) => {}}/> */}
    </div>
  );
};

export default ConterOnHover;
