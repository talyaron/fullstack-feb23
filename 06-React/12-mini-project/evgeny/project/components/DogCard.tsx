import React, { useEffect, useState } from 'react';
import { getAllDogs } from '../API/dogAPI';
import './DogCard.scss';

interface Breed{
  src:string
  breed:string
}

const Dog:React.FC<Breed> = (props) => {
  
  const handleGetDog = async () => {
    try {
      
    } catch (error) {
      console.error("Error fetching dog data:", error);

    }
  };

  useEffect(() => {
    handleGetDog();
  }, []);

  return (
    <div className='dogCard'>
      
      <img src={props.src} className='dogCard__src' alt="" width={'45rem'} height={'45rem'} />
      <div className='dogCard__text'>{props.breed}</div>
    </div>
  );
};

export default Dog;
