import axios from "axios";

export const getAllUsers = async () => {
  try {
    // const response = await fetch(
    //   "https://jsonplaceholder.typicode.com/users"
    // );
    // return response.json();
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(data)
    return data
  } catch (error) {
    console.error(error);
  }
};

export default getAllUsers;