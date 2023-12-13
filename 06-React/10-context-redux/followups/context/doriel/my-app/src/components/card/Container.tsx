// Container.tsx
import React from "react";
import Card from "./Card";

const Container: React.FC = () => {
  return (
    <div style={{ border: "3px solid #666", padding: "30px" }}>
      <h1>Container</h1>
      <p>This is a Container component.</p>
      <Card title="Card inside Container" />
    </div>
  );
};

export default Container;
