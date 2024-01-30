import axios from "axios"
import { useNavigate } from "react-router-dom"

export const BASE_URL = "/API/users"
interface RegistrationData {
  user_name: string
  password: string
}

export const registerUser = async (
  registrationData: RegistrationData,
): Promise<boolean> => {
  try {
    const response = await axios.post(
      `${BASE_URL}/register-user`,
      registrationData,
    )
    console.log("Registration response:", response.data)
    return true
  } catch (error) {
    console.error("Error during user registration:", error)
    return false
  }
}

export const getUser = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/user-by-cookie`)

    if (data.message === "no cookie") throw new Error("there is no cookie")
    return data
  } catch (error) {
    console.error("Error during user test:", error)
  }
}
