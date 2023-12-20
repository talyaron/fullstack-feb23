import axios from "axios";

export const getAllDogsBreeds = async () => {
  try {
    const allDogsBreeds = await axios.get(
      "https://dog.ceo/api/breeds/list/all"
    );
    const allBreedsFromDB = Object.keys(allDogsBreeds.data.message).map(
      (breed) => ({ name: breed })
    );

    console.log(allBreedsFromDB);
    console.log(allDogsBreeds);
    // setAllBreeds(allBreedsFromDB);
    return allBreedsFromDB;
  } catch (error) {
    console.error(error);
  }
};
