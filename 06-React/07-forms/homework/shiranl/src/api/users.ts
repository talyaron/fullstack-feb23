import axios from "axios";
const BASE_URL = "https://dummyjson.com";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    // console.log(response.data);  // Log the response data
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const signIn = async (username: string, password: string) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/login`, 
    { username, password });
    return data
  } catch (error) {
    console.error(error);
  }
}
