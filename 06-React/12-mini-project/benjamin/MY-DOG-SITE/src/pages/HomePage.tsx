import React, { useEffect, useState, useContext } from "react";
import getDogs from "../api/dogsApi";
import Dog from "../components/Dog";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { DogContext } from "../context/dogContext";

const HomePage = () => {
  const [dogData, setDogData] = useState([]);
  const navigate = useNavigate();
  const { setDog } = useContext(DogContext);

  useEffect(() => {
    getDogsFromApi();
  }, []);

  const getDogPage = (dog: string, img: string) => {
    setDog({ name: dog, image: img });
    navigate("/dogPage");
  };

  const getDogsFromApi = async () => {
    try {
      const data = await getDogs();
      const breedsArray = Object.keys(data);

      // Fetch image for each breed
      const breedsWithImages = await Promise.all(
        breedsArray.map(async (breed) => {
          const response = await fetch(
            `https://dog.ceo/api/breed/${breed}/images/random`
          );
          const imageData = await response.json();
          return { breed, imageUrl: imageData.message };
        })
      );

      setDogData(breedsWithImages);
    } catch (error) {
      console.error("Failed to fetch dogs", error);
    }
  };

  return (
    <div className="h-full w-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-center items-center overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className=" text-6xl antialiased text-gray-200 font-extrabold mt-8">
          Welcome to the world of dogs!
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200, marginBottom: 2000, marginTop:2000 }}
        animate={{ opacity: 1, y: 0, marginBottom: 0, marginTop: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-5 gap-4 mt-20 overflow-hidden">
          {dogData.map((dog, index) => (
            <motion.div
            variants={{
              initial: {opacity:0, y:200},
              view: {opacity:1, y:0}
            }}
            initial= "initial"
            whileInView="view"
            transition={{duration:0.2}}
            >
              <Dog
                key={index}
                name={dog.breed}
                img={dog.imageUrl}
                dogPage={() => getDogPage(dog.breed, dog.imageUrl)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
