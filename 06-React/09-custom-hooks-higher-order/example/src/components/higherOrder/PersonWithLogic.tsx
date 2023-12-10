import React, { useState } from "react";

const UpdatedComponent = (Originalcomponent:any) => {
  function NewComponent() {
    const [money, setMoney] = useState(10);

    function handleIncrease() {
      setMoney((prevState) => prevState * 2);
    }
    return <Originalcomponent handleIncrease={handleIncrease} money={money} />;
  }
  return NewComponent;
};

export default UpdatedComponent;
