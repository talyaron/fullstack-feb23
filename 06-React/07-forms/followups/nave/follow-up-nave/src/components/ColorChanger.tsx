import React from 'react'
import { useState } from "react"

 
const ColorChanger = () => {
    const [color, setColor] = useState("white");

    const handleSubmitUncontrolled = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setColor(window.color.value)
      };
    return (
<div> 
      <form style={{backgroundColor:color}} onSubmit={handleSubmitUncontrolled}>
        <input type="text" name="color" id="color" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ColorChanger;