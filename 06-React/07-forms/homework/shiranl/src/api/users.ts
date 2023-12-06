import axios from "axios";
const BASE_URL = "https://dummyjson.com/users";

export const getUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}`);
     // console.log(response.data);  // Log the response data
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  