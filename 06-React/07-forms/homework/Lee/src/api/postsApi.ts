import axios, { AxiosResponse } from "axios";

const API_URL = "https://dummyjson.com/posts/user/12";

export interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

export const getPosts = async (): Promise<AxiosResponse<Post[]>> => {
  try {
    const response = await axios.get<Post[]>(API_URL);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default axios;
