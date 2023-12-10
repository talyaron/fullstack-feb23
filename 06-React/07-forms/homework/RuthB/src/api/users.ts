import axios from "axios";

export const loginUser = async ( username:string , password:string ) => {
  try {
    const {data} = await axios.post("https://dummyjson.com/auth/login", {
      username,
      password,
    });
    if (data) return data;
    else return;
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = async (id:number) => {
  try {
    const {data} = await axios.get(`https://dummyjson.com/users/${id}`)
    if (data) return data;
    else return;
  } catch (error) {
    console.error(error);
  }
}