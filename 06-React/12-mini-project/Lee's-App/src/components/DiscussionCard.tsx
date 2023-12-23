import React, { useEffect, useState } from "react";
import { getBreedImage } from "../api/breedApi";
import "../scss/discussion.scss";

interface DiscussionCardProps {
  breed: string;
}

const DogCard: React.FC<DiscussionCardProps> = ({ breed }) => {
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
    <div>
      <h2>{breed}</h2>
      <img
        src={dogImage || "src/imgs/placeholder.jpg"}
        onError={() => setDogImage("src/imgs/placeholder.jpg")}
        alt={breed}
      />
    </div>
  );
};

export default DogCard;
