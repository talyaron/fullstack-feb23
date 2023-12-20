import axios from "axios";
import { FC, useEffect, useState } from "react";
import "./dogsGallery.scss"
import DogCard from "./DogCard";

interface DogsGalleryProps {
  breeds : string[]
}

const DogsGallery:FC<DogsGalleryProps> = ({breeds}) => {
 
  return(
  <div className="dogsGalleryDiv">
    {breeds.map((breed) => {
      return <DogCard key={breed} breed={breed} />;
    })}
  </div>)
};

export default DogsGallery;
