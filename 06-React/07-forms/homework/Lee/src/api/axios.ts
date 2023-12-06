import axios from "axios";

const API_URL = "http://jsonplaceholder.typicode.com";

export const getAllUsers = async () => {
  try {
    return await axios.get(`${API_URL}/users`);
  } catch (error) {
    console.error(error);
  }
};

export default axios;
