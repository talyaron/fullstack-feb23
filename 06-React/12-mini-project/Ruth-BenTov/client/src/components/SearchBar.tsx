import React, { FC, useState } from 'react';

interface SearchBarProps{
    onSearch: (term:string)=>void;
}

const SearchBar:FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    // כאן נוסיף פעולות נוספות אם נרצה לבצע פעולת חיפוש בזמן אמת
    // לדוג', קריאה לפונקציה שתעבור על הנתונים ותציג רק מה שתואם את החיפוש
    onSearch(term);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="חיפוש..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
