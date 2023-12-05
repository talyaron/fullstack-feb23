import axios from "axios";
export const getAllUsersPost = async (id: string) => {
  try {
    const { data } = await axios.get("https://dummyjson.com/posts");
    // console.log(data.posts);
    return data.posts;
  } catch (error) {
    console.error(error);
  }
};
