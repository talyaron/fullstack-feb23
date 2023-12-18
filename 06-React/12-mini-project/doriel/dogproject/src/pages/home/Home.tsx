import React, { useEffect, useState } from "react";
import Header from "../../header/Header";
import Sidebar from "../../sidebar/Sidebar";
import DogBreedsList from "./DogBreedsList";
import "./home.css";

const Home: React.FC = () => {
  const [dogBreeds, setDogBreeds] = useState<string[] | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  useEffect(() => {
    const fetchDogBreeds = async () => {
      const url = "https://dog.ceo/api/breeds/list/all";

      try {
        const response = await fetch(url);
        const result = await response.json();
        const breeds = Object.keys(result.message);
        setDogBreeds(breeds);
        setSearchResults(breeds);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDogBreeds();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredBreeds = dogBreeds?.filter((breed) =>
      breed.toLowerCase().includes(searchTerm)
    );
    setSearchResults(filteredBreeds || []);
  };

  return (
    <div className="homepage">
      <Header />
      <div className="home">
        <Sidebar />
      </div>

      <input
        type="text"
        placeholder="Search for a dog breed..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <DogBreedsList breeds={searchResults || []} />
    </div>
  );
};

export default Home;
