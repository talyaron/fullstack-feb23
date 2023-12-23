// import axios from "axios"

// const API_URL = "https://dog.ceo/dog-api/documentation"

// export const getAlldogs = async () => {
//     try {
//         const response = await axios.get(`${API_URL}/`)
//         console.log(response)
//         const {data} = response
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Breed {
  name: string;
  image: string;
}

const DogGallery: React.FC = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/list/all');
        const { data } = response;
        const breedsList = Object.keys(data.message).map((name) => ({
          name,
          image: '',
        }));
        setBreeds(breedsList);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      }
    };

    fetchBreeds();
  }, []);

  const fetchBreedImages = async (breed: string) => {
    try {
      const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
      const { data } = response;
      const updatedBreeds = breeds.map((b) =>
        b.name === breed ? { ...b, image: data.message } : b
      );
      setBreeds(updatedBreeds);
    } catch (error) {
      console.error(`Error fetching images for ${breed}:`, error);
    }
  };
}