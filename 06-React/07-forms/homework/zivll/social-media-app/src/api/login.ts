import axios from "axios";
// import { setError } from "../components/Login";

export const checkUserAccess = async (
  userName: string,
  userPassword: number,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    const username = userName;
    const password = userPassword;
    const response = await axios.post("https://dummyjson.com/auth/login", {
      username: username,
      password: password,
    });

    return response.data;
    // else {
    //   return response.data.message;
    // }
  } catch (error) {
    console.error(error);
    // return error.message;
    setError(error.message);

    // return error;
  }
};
