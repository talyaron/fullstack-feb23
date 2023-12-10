import axios from "axios";

export const getAllPostsFromApi = async () => {
    const {data} = await axios.get("https://dummyjson.com/posts")
    return data.posts;
  }
  