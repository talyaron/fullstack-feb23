import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getBreedImages } from '../../api/dogApi';

const Breeds = () => {
  const  { breed } = useParams();
  const [image, setImage] = useState("");

  const fetchBreedImage = async () => {
    try {
        const  data  = await getBreedImages(breed || "");

      if (data.status === "success") {
        setImage(data.message);
      } else {
        console.error("Failed to fetch breed image");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBreedImage();
  }, [breed]);

  return (
    <div>
      <div className="breed-page">
        <h2>{breed}</h2>
        <img src={image} alt={breed} />
      </div>
    </div>
  )
}

export default Breeds
function fetchBreedImage() {
  throw new Error('Function not implemented.');
}

