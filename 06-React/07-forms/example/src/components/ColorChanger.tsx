import React, { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("white");
  const [text, setText] = useState("");
  
  const [color2, setColor2] = useState("white");

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setColor(text);
  };

  const handleSubmitUncontrolled = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setColor2(window.color2.value)
  };

  return (
    // controlled
    <div style={{ backgroundColor: color }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onInput={(ev) => {
            setText((ev.target as HTMLInputElement).value);
          }}
        />
        <button type="submit">SUBMIT</button>
        {text}
      </form>

      {/* uncontrolled */}
      <form style={{backgroundColor:color2}} onSubmit={handleSubmitUncontrolled}>
        <input type="text" name="color2" id="color2" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ColorChanger;
