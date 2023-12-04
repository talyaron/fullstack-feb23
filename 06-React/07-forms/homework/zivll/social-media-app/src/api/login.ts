import axios from "axios";

export const checkUserAccess = async (
  userName: string,
  userPassword: number
) => {
  try {
    const username = userName;
    const password = userPassword;
    const response = await axios.post("https://dummyjson.com/auth/login", {
      username: username,
      password: password,
    });
    if (response.status === 200) return response.data.token;
    // else {
    //   return response.data.message;
    // }
  } catch (error) {
    console.error(error);
    return error;
  }
};
