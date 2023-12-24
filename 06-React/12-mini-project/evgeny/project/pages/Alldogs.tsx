import React, { useEffect, useState } from 'react'
import { getAllDogs } from '../API/dogAPI.ts';

import DogCard from '../components/DogCard.tsx'



const Alldogs = () => {
  const [dogArr, SetDogArr] = useState<any[]>()
  const [searchTerm, setSearchTerm] = useState<string>('');


  const handleGetDog = async () => {
    try {
      const data = await getAllDogs();
      SetDogArr(data);
    } catch (error) {
      console.error('Error fetching dog data:', error);
    }
  };



  useEffect(() => {
    handleGetDog()
  }, [])


  const filteredBreeds = dogArr
    ? dogArr.filter((breed) =>
      breed.breed.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : [];
  return (
    <>
      <input
        type="text"
        placeholder="Search for breed"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='DogList'>
        {filteredBreeds.map((breed) => (
          <DogCard key={breed.id} {...breed} />
        ))}
      </div>
    </>
  );
};

export default Alldogs
