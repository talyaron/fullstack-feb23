import axios from "axios";

const API_URL = "https://dog.ceo/api";

export interface DogBreedsResponse {
  message: Record<string, string[]>;
  status: string;
}

export const getDogBreeds = async (): Promise<DogBreedsResponse> => {
  try {
    const { data } = await axios.get<DogBreedsResponse>(
      `${API_URL}/breeds/list/all`
    );
    return data;
  } catch (error) {
    console.error("Error fetching dog breeds:", error);
    throw error;
  }
};

export const getBreedImage = async (breed: string) => {
  try {
    const { data } = await axios.get(`${API_URL}/breed/${breed}/images/random`);
    const { message } = data;
    const src = Array.isArray(message) ? message[0] : message;
    return { breed, src, description: "hello" };
  } catch (error) {
    console.error("Error fetching breed image:", error);
    throw error;
  }
};

export default axios;
