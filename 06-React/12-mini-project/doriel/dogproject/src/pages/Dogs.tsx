import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./home/dog.css";

const Dog: React.FC = () => {
  const { breed } = useParams<{ breed: string }>();
  const [dogDetails, setDogDetails] = useState<{
    image: string;
    description: string;
  } | null>(null);
  const [suggestedDogs, setSuggestedDogs] = useState<
    { breed: string; image: string }[]
  >([]);

  useEffect(() => {
    const fetchDogDetails = async () => {
      const url = `https://dog.ceo/api/breed/${breed}/images/random`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        const image = result.message;

        const description = `This is the full details of the ${breed}. It is a cute dog that loves humans and will protect you from all evil home invaders! You should get this dog now :D!`;

        setDogDetails({ image, description });
      } catch (error) {
        console.error(error);
      }
    };

    const fetchSuggestedDogs = async () => {
      const url = "https://dog.ceo/api/breeds/list/random/6";
      try {
        const response = await fetch(url);
        const result = await response.json();
        const dogs = result.message;
        const suggestedDogsData = await Promise.all(
          dogs.map(async (dog: string) => {
            const imageUrl = await fetchDogImage(dog);
            return { breed: dog, image: imageUrl };
          })
        );
        setSuggestedDogs(suggestedDogsData);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchDogImage = async (dog: string) => {
      const imageUrlResponse = await fetch(
        `https://dog.ceo/api/breed/${dog}/images/random`
      );
      const imageUrlResult = await imageUrlResponse.json();
      return imageUrlResult.message;
    };

    fetchDogDetails();
    fetchSuggestedDogs();
  }, [breed]);

  if (!dogDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dog-details-container">
      <h2>Dog Details for {breed}</h2>
      <div className="dog-details-content">
        <img
          src={dogDetails.image}
          alt={`Image of ${breed}`}
          className="dog-details-image"
        />
        <p>{dogDetails.description}</p>
      </div>
      <div className="suggested-dogs-container">
        <h3>Suggested Dogs</h3>
        <div className="suggested-dogs-list">
          {suggestedDogs.map((dog, index) => (
            <Link
              to={`/dog/${dog.breed}`}
              key={index}
              className="suggested-dog"
            >
              <img src={dog.image} alt={`Image of ${dog.breed}`} />
              <span>{dog.breed}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dog;
