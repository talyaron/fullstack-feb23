import React, { useEffect, useState } from "react";
import { getDogBreeds } from "../api/breedApi";
import DogCard from "../components/DogCard";
import Chatbox from "../components/Chatbox";

const DiscussionPage: React.FC = () => {
  const [randomBreed, setRandomBreed] = useState<string | null>(null);

  useEffect(() => {
    const fetchRandomBreed = async () => {
      try {
        const response = await getDogBreeds();
        const breeds = Object.keys(response.message);
        const randomIndex = Math.floor(Math.random() * breeds.length);
        const randomBreed = breeds[randomIndex];
        setRandomBreed(randomBreed);
      } catch (error) {
        console.error("Error fetching random dog breed:", error);
      }
    };

    fetchRandomBreed();
  }, []);

  return (
    <div>
      {randomBreed && (
        <>
          <DogCard breed={randomBreed} />
          <Chatbox breed={randomBreed} />
        </>
      )}
      <div>About the Breeds</div>
    </div>
  );
};

export default DiscussionPage;
