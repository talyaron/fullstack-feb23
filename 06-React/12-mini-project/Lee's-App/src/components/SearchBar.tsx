import React, { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

interface SearchBarProps {
  onSearchChange: (search: string) => void;
  onSearchSubmit: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  const [search, setSearch] = useState<string>("");

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    onSearchChange(debouncedSearch);
  }, [debouncedSearch, onSearchChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <form style={{ marginBottom: "25px" }}>
      <input
        type="search"
        placeholder=" Search Breed"
        value={search}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
