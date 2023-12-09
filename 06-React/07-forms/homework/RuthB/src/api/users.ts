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
