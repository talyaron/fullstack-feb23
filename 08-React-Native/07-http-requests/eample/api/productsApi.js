import axios from "axios";

const API_URL = "http://fakestoreapi.com";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
