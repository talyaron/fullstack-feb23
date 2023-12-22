// Gallery.tsx
import React, { useEffect, useState } from "react";
import { getDogBreeds } from "../api/breedApi";
import DogCard from "../components/DogCard";
import SearchBar from "../components/SearchBar"; // Import the SearchBar component

const Gallery: React.FC = () => {
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
    <div>
      {/* Place the SearchBar component here */}
      <SearchBar onSearchChange={(search) => console.log(search)} />
      <h2>Dog Breeds</h2>
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
    </div>
  );
};

export default Gallery;
