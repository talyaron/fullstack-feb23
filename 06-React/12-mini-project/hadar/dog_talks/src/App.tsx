import React, {useState} from 'react';
import './App.scss';
import BreedCard from './components/breedCard/breedCard';


export const breeds: string[] = ['affenpinscher', 'african', 'airedale','akita','appenzeller'];

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredBreeds, setFilteredBreeds] = useState<string[]>(breeds);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = breeds.filter(breed => breed.toLowerCase().includes(term));
    setFilteredBreeds(filtered);
  };
  return (
    <div className="App">
      <p className="top">Art Talks</p>
      <div className="search">
        <input type="text" id="search" placeholder="What are tou looking for" value={searchTerm} onChange={handleSearchChange}/>
      </div>
      <div id="breed-gallery">
        {filteredBreeds.map(breed => (
          <BreedCard key={breed} breed={breed} />
        ))}
      </div>
      <div className="gallery" id="breed-gallery">
        {breeds.map(breed => (
          <BreedCard key={breed} breed={breed} />
        ))}
      </div>
    </div>
  );
};

export default App;
