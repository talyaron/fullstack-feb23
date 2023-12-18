import React, { useEffect, useState } from "react";
import { getBreedImage } from "../api/breedApi";

interface DogCardProps {
  breed: string;
}

const DogCard: React.FC<DogCardProps> = ({ breed }) => {
  const [dogImage, setDogImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const { src } = await getBreedImage(breed);
        setDogImage(src);
      } catch (error) {
        console.error("Error fetching breed image:", error);
      }
    };

    fetchImage();
  }, [breed]);

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
      <img
        src={dogImage || "placeholder_url_for_error"}
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
