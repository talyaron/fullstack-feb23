import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DogBreedsList: React.FC<{ breeds: string[] }> = ({ breeds }) => {
  const [dogImages, setDogImages] = useState<{ [key: string]: string }>({});
  const [visibleDogs, setVisibleDogs] = useState<number>(6);

  const loadMoreDogs = () => {
    setVisibleDogs((prevVisibleDogs) => prevVisibleDogs + 6);
  };

  useEffect(() => {
    const fetchDogImages = async () => {
      const dogsToFetch = breeds.slice(0, visibleDogs);
      const imagesPromises = dogsToFetch.map(async (breed) => {
        const url = `https://dog.ceo/api/breed/${breed}/images/random`;
        try {
          const response = await fetch(url);
          const result = await response.json();
          setDogImages((prevImages) => ({
            ...prevImages,
            [breed]: result.message,
          }));
        } catch (error) {
          console.error(error);
        }
      });

      await Promise.all(imagesPromises);
    };

    fetchDogImages();
  }, [breeds, visibleDogs]);

  return (
    <div className="dog-breeds-container">
      <h2>Dog Breeds</h2>
      <ul className="dog-breeds-list">
        {breeds.slice(0, visibleDogs).map((breed, index) => (
          <li key={index} className="dog-breed-item">
            <div className="dog-item-container">
              {dogImages[breed] && (
                <img
                  src={dogImages[breed]}
                  alt={`Image of ${breed}`}
                  className="dog-breed-image"
                />
              )}
              <div className="dog-info">
                <span className="dog-name">{breed}</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi autem nemo eaque explicabo perspiciatis enim eos neque
                  exercitationem quia magni cumque assumenda consequatur, illo,
                  laborum odit totam ipsam, minima adipisci!
                </p>
                <button className="dog-link-button">
                  <Link to={`/dog/${breed}`}>View Details</Link>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {visibleDogs < breeds.length && (
        <button className="loadDogs" onClick={loadMoreDogs}>
          Load More Dogs
        </button>
      )}
    </div>
  );
};

export default DogBreedsList;
