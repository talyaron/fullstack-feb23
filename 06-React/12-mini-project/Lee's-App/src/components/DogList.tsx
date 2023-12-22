import React, { useEffect, useState } from "react";
import { getDogBreeds } from "../api/breedApi";
import DogCard from "./DogCard";
import SearchBar from "../components/SearchBar";
import { useDebounce } from "../hooks/useDebounce";

const DogList: React.FC = () => {
  const [dogBreeds, setDogBreeds] = useState<string[]>([]);
  const [filteredBreeds, setFilteredBreeds] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDogBreeds();
        const breeds = Object.keys(response.message);
        setDogBreeds(breeds);
        setFilteredBreeds(breeds);
      } catch (error) {
        console.error("Error fetching dog breeds:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
  };

  // Use the useDebounce hook to debounce the search input
  const debouncedSearch = useDebounce(searchTerm, 300);

  // Update filtered breeds when the debounced search term changes
  useEffect(() => {
    const filtered = dogBreeds.filter((breed) =>
      breed.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
    setFilteredBreeds(filtered);
  }, [debouncedSearch, dogBreeds]);

  return (
    <div>
      <SearchBar
        onSearchChange={handleSearchChange}
        onSearchSubmit={() => {}}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {filteredBreeds.map((breed) => (
          <DogCard key={breed} breed={breed} />
        ))}
      </div>
    </div>
  );
};

export default DogList;
