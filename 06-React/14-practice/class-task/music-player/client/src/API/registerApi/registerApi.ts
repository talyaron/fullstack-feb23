import axios from "axios";

const BASE_URL = "/api/register";

interface RegistrationData {
  username: string;
  email: string;
  password: string;
}

export const registerUser = async (registrationData: RegistrationData): Promise<boolean> => {
  try {
    const response = await axios.post(BASE_URL, registrationData);
    console.log("Registration response:", response.data);
    return true;
  } catch (error) {
    console.error("Error during user registration:", error);
    return false;
  }
};
