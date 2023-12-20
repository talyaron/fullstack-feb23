// Card.tsx
import React from "react";
import MiniCard from "./MiniCard";

interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  return (
    <div
      style={{
        border: "2px solid #333",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <h2>{title}</h2>
      <p>This is a Card component.</p>
      <MiniCard title="MiniCard inside Card" />
    </div>
  );
};

export default Card;
