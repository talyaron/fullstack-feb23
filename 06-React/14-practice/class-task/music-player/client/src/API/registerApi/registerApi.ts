import axios from "axios"

export const BASE_URL = "/API"

interface RegistrationData {
  user_name: string
  password: string
}

export const registerUser = async (
  registrationData: RegistrationData,
): Promise<boolean> => {
  try {
    const response = await axios.post(
      `${BASE_URL}/users/register-user`,
      registrationData,
    )
    console.log("Registration response:", response.data)
    return true
  } catch (error) {
    console.error("Error during user registration:", error)
    return false
  }
}
