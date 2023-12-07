import axios, { AxiosResponse } from "axios";

const API_URL = "https://dummyjson.com/auth/login";

export interface AuthResponse {
  userId: string;
  accessToken: string;
  roles: string[]; // Assuming roles are part of the response
}

export const authenticateUser = async (
  username: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(API_URL, {
      username,
      password,
    });

    // Assuming response.data contains userId, accessToken, and roles
    const { userId, accessToken, roles } = response.data;

    return { userId, accessToken, roles };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default axios;
