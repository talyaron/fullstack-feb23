// dogApi.ts  

import axios from "axios";


const API_URL = "https://dog.ceo/api";

export const getAllBreeds = async () => {
  try {
    
    const {data} = await axios.get(`${API_URL}/breeds/list/all`);
    console.log(data);
    
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getBreedImages = async (breed: string) => {
  try {
    
    const {data} = await axios.get(`${API_URL}/breed/hound/images/random`);

    return data;
  } catch (error) {
    console.error(error);
  }
}