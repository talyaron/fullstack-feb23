import axios from "axios";

export const handlePostByUSer = async (userId: number) => {
  try {
    if (userId) {
      const { data } = await axios.get(
        `https://dummyjson.com/posts/user/${userId}`
      );
      if (data) return data;
      else return;
    } 
    else throw new Error(`User not found - received ${userId}`);
  } catch (error) {
    console.error(error);
  }
};
