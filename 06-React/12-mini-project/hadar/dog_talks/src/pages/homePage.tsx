import BreedCard from '../components/breedCard/breedCard';
import Search from '../components/search/Search'
export const breeds: string[] = ['affenpinscher', 'african', 'airedale','akita','appenzeller'];

const homePage: React.FC = () => {

  return (
    
    <div className="App">
      <p className="top">Art Talks</p>
      <Search/>
      <div className="gallery" id="breed-gallery">
        {breeds.map(breed => (
          <BreedCard key={breed} breed={breed} />
        ))}
      </div>
    </div>
  );
};

export default homePage;
