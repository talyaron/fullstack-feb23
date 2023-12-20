import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BreedPage: React.FC = () => {
  const { breed } = useParams<{ breed: string }>();
  const [breedInfo, setBreedInfo] = useState<any>({});

  useEffect(() => {
    const fetchBreedInfo = async () => {
      try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        const data = await response.json();
        console.log('API response:', data);
        setBreedInfo(data?.message);
      } catch (error) {
        console.error('Error fetching breed info:', error);
      }
    };

    fetchBreedInfo();
  }, [breed]);

  return (
    <div>
      <h2>{breed} Information</h2>
      {breedInfo && (
        <>
         <img src={breedInfo?.message?.image} alt={breed} />

          <p>{breedInfo?.description || 'No description available'}</p>
        </>
      )}
    </div>
  );
};

export default BreedPage;
