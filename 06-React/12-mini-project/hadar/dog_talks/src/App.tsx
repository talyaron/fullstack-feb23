import React, {useState} from 'react';
import './App.scss';
import BreedCard from './components/breedCard/breedCard';


export const breeds: string[] = ['affenpinscher', 'african', 'airedale','akita','appenzeller'];

const App: React.FC = () => {

  return (
    <div className="App">
      <p className="top">Art Talks</p>
     
      <div className="gallery" id="breed-gallery">
        {breeds.map(breed => (
          <BreedCard key={breed} breed={breed} />
        ))}
      </div>
    </div>
  );
};

export default App;
