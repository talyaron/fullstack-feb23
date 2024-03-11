import axios from "axios";

export const API_URL = "http://fakestoreapi.com";

export const getProducts = async () => {
  try {
    return await axios.get(`${API_URL}/products`);
  } catch (error) {
    console.log(error);
    return error;
  }
};
