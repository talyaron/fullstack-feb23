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
        setDogImage("/imgs/placeholder.jpg");
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
        width: "270px",
        height: "270px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <img
        src={dogImage || "src/imgs/placeholder.jpg"}
        onError={() => setDogImage("src/imgs/placeholder.jpg")}
        style={{
          maxWidth: "100%",
          maxHeight: "150px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
        // alt={breed}
      />
      <h3>{breed}</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit..</p>
    </div>
  );
};

export default DogCard;
