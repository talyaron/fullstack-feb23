import React, { useState } from "react";

const ColorChanger = () => {
  const [text, setText] = useState<string>("");
  const [color, setColor] = useState<string>("white");

  const [color2, setColor2] = useState<string>("white");

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (text) {
      setColor(text);
    }
  };

  const handleSubmitUnControlled = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setColor2(window.text2.value)
  };

  return (
    //controlled
    <div style={{ backgroundColor: color }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="text"
          name="text"
          value={text}
          onInput={(ev) => {
            setText((ev.target as HTMLInputElement).value);
          }}
          // onChange={(ev) => setText((ev.target as HTMLInputElement).value)}
        />
        <button type="submit">PICK</button>
      </form>

      {/* uncontrolled */}
      <form style={{backgroundColor: color2}} onSubmit={handleSubmitUnControlled}>
        <input type="text" id="text2" name="text2" onInput={(ev) => {console.log(ev.target.value)}}/>
        <button type="submit">PICK</button>
      </form>
    </div>
  );
};

export default ColorChanger;
