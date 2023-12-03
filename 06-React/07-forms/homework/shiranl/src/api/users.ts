import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);
    
    return response.data;
    
  } catch (error) {
    console.error(error);
  }
    }