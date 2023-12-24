// BreedCard.js
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./BreedCard.scss";
import { getBreedImages } from "../../api/dogApi";
import { Link } from "react-router-dom";

interface BreedCardProps {
    breed: string;
    }

const BreedCard : React.FC<BreedCardProps> = ({ breed }) => {
  const [image, setImage] = useState("");
  const fetchBreedImage = async () => {
    try {
        const data = await getBreedImages(breed);

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
    <div className="breed-card" >
      {image && <img src={image} alt={breed} />}
      <p>{breed}</p>
        <Link to={`/breeds/${breed}`}>View {breed}</Link>   
      
    </div>
  );
};

BreedCard.propTypes = {
  breed: PropTypes.string.isRequired,
};

export default BreedCard;
