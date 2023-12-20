// MiniCard.tsx
import React from "react";

interface MiniCardProps {
  title: string;
}

const MiniCard: React.FC<MiniCardProps> = ({ title }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{title}</h3>
      <p>This is a MiniCard component.</p>
    </div>
  );
};

export default MiniCard;
