import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import "./dogCard.scss";
import { useNavigate } from "react-router-dom";

interface DogCardProps {
  breed: string;
}

const DogCard: FC<DogCardProps> = ({ breed }) => {
  const navigate = useNavigate()
  const [imgUrl, setImgUrl] = useState("");

  const getImgByBreed = async () => {
    const response = await axios.get(
      `https://dog.ceo/api/breed/${breed}/images`
    );
    setImgUrl(response.data.message[0]);
  };

  function dogsClicked() {
    navigate(`/dog/:${breed}`, {state: {imgUrl}})
  }

  useEffect(() => {
    getImgByBreed();
  }, []);

  return (
    <div
      className="dogCardDiv"
      onClick={() => {
        dogsClicked();
      }}
    >
      <img src={imgUrl}></img>
      <h3>{breed}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default DogCard;
