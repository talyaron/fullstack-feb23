import React, { useEffect, useState } from "react";
import { getBreedImage } from "../api/breedApi";

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
      <img
        src={dogImage || "src/imgs/placeholder.jpg"}
        onError={() => setDogImage("src/imgs/placeholder.jpg")}
        alt={breed}
      />
      <h3>{breed}</h3>
      <p>
        The term 'a dog is a man's best friend' was first used way back in 1789
        by King Frederick of Prussia..
      </p>
    </div>
  );
};

export default DogCard;
