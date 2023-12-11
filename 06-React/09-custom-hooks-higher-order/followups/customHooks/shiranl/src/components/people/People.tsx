import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter';
import useDebouncing from '../../hooks/useDebouncing';

const People = () => {
    const {counter, handleAddOne} = useCounter();

    const [searchTerm, setSearchTerm] = useState<string>('');
    const debouncedSearchTerm = useDebouncing(searchTerm, 2000);
  return (
    <div>
        <h1>People</h1>
        <h2>{counter}</h2>
        <button onMouseEnter={handleAddOne}>Add One on hover</button>
        <div>
      <input
        type="text" value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <h1>Debounced Search Term: {debouncedSearchTerm}</h1>
    </div>
      
    </div>
  )
}

export default People
