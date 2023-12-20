// SearchBox.tsx
import React, { useState } from 'react';

interface SearchBoxProps {
  onSearch: (term: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <input className='searchBox'
      type="text"
      placeholder="Search for a breed..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBox;
