import axios, { AxiosResponse } from "axios";

const API_URL = "https://dummyjson.com/auth/login";

interface AuthResponse {
  accessToken: string;
  roles: string[];
}

export const authenticateUser = async (
  username: string,
  password: string
): Promise<AxiosResponse<AuthResponse>> => {
  try {
    return await axios.post<AuthResponse>(API_URL, {
      username,
      password,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default axios;
