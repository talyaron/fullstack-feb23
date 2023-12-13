import axios from "axios";

export const getUserdb = async () => {
  const { data } = await axios.get( "https://jsonplaceholder.typicode.com/users/1");

  return data;
};
 