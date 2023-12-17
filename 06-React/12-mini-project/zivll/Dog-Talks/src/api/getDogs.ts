import axios from "axios";

export const getAllDogsBreeds = async (allbreeds, setAllBreeds) => {
  try {
    const allDogsBreeds = await axios.get(
      "https://dog.ceo/api/breeds/list/all"
    );
    const allBreedsFromDB = Object.keys(allDogsBreeds.data.message).map(
      (breed) => ({ name: breed })
    );
    console.log(allBreedsFromDB);
    console.log(allDogsBreeds);
    setAllBreeds(allBreedsFromDB);
    return allDogsBreeds.data.message;
  } catch (error) {
    console.error(error);
  }
};
