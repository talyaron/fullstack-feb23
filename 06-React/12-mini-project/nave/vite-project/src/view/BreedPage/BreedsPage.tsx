import React, { useEffect, useState } from 'react';
import fetchBreedsList from '../../api/breedsApi';
import SearchBox from '../../components/SearchBox/SearchBox';
import { Link } from 'react-router-dom';


const BreedsPage: React.FC = () => {
  const [breedsList, setBreedsList] = useState<string[]>([]);
  const [breedImages, setBreedImages] = useState<{ [key: string]: string }>({});
  const [filteredBreeds, setFilteredBreeds] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchBreedsList();
        setBreedsList(result);
        setFilteredBreeds(result);
      } catch (error) {
        console.error('Error fetching breeds list:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchBreedImage = async (breed: string) => {
      try {
        const breedInfo = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const breedData = await breedInfo.json();
        return breedData?.message;
      } catch (error) {
        console.error('Error fetching breed image:', error);
        return null;
      }
    };

    const fetchImages = async () => {
      const breedImagesMap: { [key: string]: string } = {};
      for (const breed of breedsList) {
        const image = await fetchBreedImage(breed);
        breedImagesMap[breed] = image || ''; 
      }
      setBreedImages(breedImagesMap);
    };

    fetchImages();
  }, [breedsList]);

  const handleSearch = (term: string) => {
    const filtered = breedsList.filter(breed =>
      breed.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredBreeds(filtered);
  };

  return (
<div className="dog-breeds-gallery">
    <h2>Dog Breeds Gallery</h2>
    <SearchBox onSearch={handleSearch} />
  <div className="breed-cards">
    {filteredBreeds.map((breed) => (
    <div key={breed} className="breed-card">
    <Link to={`/breeds/${breed}`}>
  <img src={breedImages[breed]} alt={breed} />
  <p>{breed}</p>
    </Link>
    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorum est maxime numquam mollitia dolor.</h4>
 </div>
))}

  </div>
 </div>
  );
};

export default BreedsPage;
