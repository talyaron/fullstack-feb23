import React, { useEffect, useState } from "react";
import { getDogBreeds } from "../api/breedApi";
import DiscussionCard from "../components/DiscussionCard";
import Chatbox from "../components/Chatbox";
import "../scss/discussion.scss";

const Discussion: React.FC = () => {
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
    <div className="discussion-container">
      {randomBreed && (
        <>
          <div className="discussion-dog-card">
            <DiscussionCard breed={randomBreed} />
          </div>
          <div className="discussion-chatbox">
            <Chatbox breed={randomBreed} />
          </div>
        </>
      )}
    </div>
  );
};

export default Discussion;
