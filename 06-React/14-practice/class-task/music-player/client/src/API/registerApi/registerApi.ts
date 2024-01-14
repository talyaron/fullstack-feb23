import axios from "axios";

export const BASE_URL = "/api";

interface RegistrationData {
  username: string;
  email: string;
  password: string;
}

export const registerUser = async (registrationData: RegistrationData): Promise<boolean> => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, registrationData);
    console.log("Registration response:", response.data);
    return true;
  } catch (error) {
    console.error("Error during user registration:", error);
    return false;
  }
};
