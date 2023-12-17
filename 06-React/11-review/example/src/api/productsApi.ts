import axios from "axios";

//in env
const API_URL = "https://dummyjson.com";

export const getAllProducts = async () => {
  try {
    const {data} = await axios.get(`${API_URL}/products`);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};