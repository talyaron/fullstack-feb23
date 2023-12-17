// DogCard.tsx
import React, { useEffect, useState } from "react";

interface DogCardProps {
  breed: string;
  description: string;
}

const DogCard: React.FC<DogCardProps> = ({ breed, description }) => {
  const imageUrl = `https://dog.ceo/api/breed/${breed}/images/random`;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h3>{breed}</h3>
      <p>{description}</p>
      <img
        src={imageUrl}
        alt={breed}
        style={{
          maxWidth: "100%",
          maxHeight: "150px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};

export default DogCard;
