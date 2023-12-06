import axios from "axios";
export const getAllUsersPost = async () => {
  try {
    const { data } = await axios.get("https://dummyjson.com/posts?limit=0");
    return data.posts;
  } catch (error) {
    console.error(error);
  }
};
