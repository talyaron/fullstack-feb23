import axios from "axios";

export const getAllUsers = async () => {
  try {
 
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(data)
    return data
  } catch (error) {
    console.error(error);
  }
};