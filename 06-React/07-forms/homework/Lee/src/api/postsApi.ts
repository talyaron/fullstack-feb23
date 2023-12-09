import axios, { AxiosResponse } from "axios";

const API_URL = "https://dummyjson.com/posts/user";

export interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

export const getPosts = async (
  userId: string
): Promise<AxiosResponse<Post[]>> => {
  try {
    const response = await axios.get<Post[]>(`${API_URL}/${userId}`);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default axios;
