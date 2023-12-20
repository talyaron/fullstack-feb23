import React, { useEffect, useState } from "react";
import DogsGallery from "./DogsGallery";
import SearchBar from "./SearchBar";
import axios from "axios";

const homePage = () => {
  const [breeds, setBreeds] = useState<string[]>([]);
  const [filterBreeds, setFilterBreeds] = useState<string[]>([]);

  const getBreeds = async () => {
    try {
      const response = await axios.get("https://dog.ceo/api/breeds/list/all");
      const { message } = response.data;
      const breedNames = Object.keys(message);
      if (!breedNames) throw new Error("not found breeds");
      setBreeds(breedNames);
      setFilterBreeds(breedNames);
    } catch (error) {
      console.error(error);
    }
  };

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getBreeds();
  }, []);

  const handleInputChange = (event: any) => {
    setFilterBreeds(breeds);
    const term = event.target.value;
    setSearchTerm(term);

    let filtered = filterBreeds.filter((item) =>
      item.toLowerCase().includes(term.toLowerCase())
    );
    setFilterBreeds(filtered);
  };

  return (
    <div>
      <h1>Dogs</h1>
      <div className="searchBar">
        <input
          type="text"
          placeholder="חיפוש..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>{" "}
      <DogsGallery breeds={filterBreeds} />
    </div>
  );
};

export default homePage;
