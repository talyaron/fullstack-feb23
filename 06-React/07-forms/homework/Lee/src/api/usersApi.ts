import axios from "axios";

const API_URL = "https://dummyjson.com/auth/login";

export interface AuthResponse {
  userId: string;
  accessToken: string;
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

    const { userId, accessToken } = response.data;

    return { userId, accessToken };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default axios;
