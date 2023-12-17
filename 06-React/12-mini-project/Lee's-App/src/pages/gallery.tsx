// Gallery.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import DogCard from "../components/DogCard"; // Update the path accordingly
import { getDogBreeds } from "../api/breedApi";

const Gallery: React.FC = () => {
  const [dogBreeds, setDogBreeds] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDogBreeds();
        // const response = await axios.get("https://dog.ceo/api/breeds/list/all");
        // console.log(response);
        // const breeds = Object.entries(response.data.message).map(
        //   ([breed, subBreeds]) => ({
        //     breed,
        //     description: subBreeds.length
        //       ? subBreeds.join(", ")
        //       : "No description available",
        //   })
        // );
        setDogBreeds(data);
      } catch (error) {
        console.error("Error fetching dog breeds:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dog Breeds</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {dogBreeds.map(
          (breedData) => {
            return <div>{JSON.stringify(breedData)}</div>;
          }
          //   <DogCard key={breedData.breed} {...breedData} />
        )}
      </div>
    </div>
  );
};

export default Gallery;
