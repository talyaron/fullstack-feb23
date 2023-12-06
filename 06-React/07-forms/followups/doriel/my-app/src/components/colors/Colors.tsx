// Colors.tsx

import React, { useState } from "react";

interface ColorsProps {
  onColorChange: (newColor: string) => void;
}

function Colors({ onColorChange }: ColorsProps) {
  const [color, setColor] = useState("green");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onColorChange(text);
    setText("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(ev) => {
            setText(ev.target.value);
          }}
          placeholder="Type your color"
          style={{
            padding: "8px",
            marginRight: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px",
            borderRadius: "4px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Change Color
        </button>
      </form>
      <hr></hr>
    </div>
  );
}

export default Colors;
