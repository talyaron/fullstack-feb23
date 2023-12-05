import { useState } from "react";

function Colors() {
  const [color, setColor] = useState("green");
  const [text, setText] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setColor(text);
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
      <div
        style={{
          color: color,
          marginTop: "20px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Hello World
      </div>
    </div>
  );
}

export default Colors;
