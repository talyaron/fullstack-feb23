import React, { useEffect, useState } from 'react';
import './breedCard.scss';

interface BreedCardProps {
  breed: string;
}

export const BreedCard: React.FC<BreedCardProps> = ({ breed }) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [description, setDescription] = useState<string>('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(response => response.json())
      .then(data => setImageUrl(data.message))
      .catch(error => console.error(`Error fetching data for ${breed}: ${error}`));
  }, [breed]);

  return (
    <div className="breed-card">
      <img src={imageUrl} alt={breed} className="breed-image" />
      <div className="breed-info">
        <h3>{breed}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BreedCard;

