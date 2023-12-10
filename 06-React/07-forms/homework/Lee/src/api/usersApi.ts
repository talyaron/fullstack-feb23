import axios from "axios";

const API_URL = "https://dummyjson.com";

export const authenticateUser = async (username: string, password: string) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/login`, {
      username,
      password,
    });
    if (!data.username) throw new Error("No data received on bla bla") 
    return data;
  
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};
