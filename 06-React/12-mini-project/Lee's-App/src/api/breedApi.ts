import axios, { AxiosResponse } from "axios";

const API_URL = "https://dog.ceo/api";

export interface DogBreedsResponse {
  message: Record<string, string[]>;
  status: string;
}

export const getDogBreeds = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/breeds/list/all`);
    const { message } = data;
    const breeds = Object.keys(message);
    const images = await Promise.all(
      breeds.map((breed) => getBreedImage(breed))
    );
    return images;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getBreedImage = async (breed: string) => {
  try {
    const { data } = await axios.get(`${API_URL}/breed/${breed}/images/random`);
    const { message } = data;
    return { breed, src: message, description: "hello" };
  } catch (error) {
    console.error(error);
  }
};

export default axios;
