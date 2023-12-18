// DogList.tsx
import React, { useEffect, useState } from "react";
import { getDogBreeds } from "../api/breedApi";
import DogCard from "./DogCard";

const DogList: React.FC = () => {
  const [dogBreeds, setDogBreeds] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDogBreeds();
        const breeds = Object.keys(response.message);
        setDogBreeds(breeds);
      } catch (error) {
        console.error("Error fetching dog breeds:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {dogBreeds.map((breed) => (
        <DogCard key={breed} breed={breed} />
      ))}
    </div>
  );
};

export default DogList;
