import axios from "axios";

const API_URL = "https://dummyjson.com/auth/login";

export const authenticateUser = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/users`, {
      username,
      password,
    });
    console.log(response);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};
