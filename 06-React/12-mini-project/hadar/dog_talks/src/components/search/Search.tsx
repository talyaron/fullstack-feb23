import React, {useState} from 'react'
import {BreedCard} from '../breedCard/breedCard'
import {breeds} from '../../App'

export const Search = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredBreeds, setFilteredBreeds] = useState<string[]>(breeds);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = breeds.filter(breed => breed.toLowerCase().includes(term));
    setFilteredBreeds(filtered);
  return (
    <div>
         <div className="search">
        <input type="text" id="search" placeholder="What are tou looking for" value={searchTerm} onChange={handleSearchChange}/>
      </div>
      <div id="breed-gallery">
        {filteredBreeds.map(breed => (
          <BreedCard key={breed} breed={breed} />
        ))}
      </div>
    </div>
  )
}
}
