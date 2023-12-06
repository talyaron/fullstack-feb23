import axios from "axios";

const BASE_URL = "https://dummyjson.com/auth/login";

export const loginUser = async (username: string, password: string): Promise<User | null> => {
  try {
    const {data} = await axios.post(BASE_URL, {
      username,
      password,
    });
    // const data = response.data;

    console.log("Data from API:", data);

    if (data && data.token) {
      console.log("Username:", username);
      console.log("Password:", password);
      console.log(data.token)

      // Assuming the response contains a property 'user'
      // const user = data.user;

      // return user || null;
      return data
    } else {
      console.error("Token is missing from the API response");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data from the API", error);
    return null;
  }
};
