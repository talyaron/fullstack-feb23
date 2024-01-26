import axios from "axios"
import { getCookie } from "./getCookie"

export const BASE_URL = "/API/users"

interface RegistrationData {
  user_name: string
  password: string
}
interface LoginData {
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
export const loginUser = async (loginData: LoginData): Promise<boolean> => {
  try {
    const response = await axios.post(` ${BASE_URL}/login-user`, loginData)
    console.log("Login response:", response.data)
    return true
  } catch (error) {
    console.error("Error during user login:", error)
    return false
  }
}

export const getUser = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/user-by-cookie`)
    // console.log("cookie response:", data)
    if (data.results.length == 0) throw new Error("ther is no cookie")

    return data
  } catch (error) {
    console.error("Error during user test:", error)
  }
}
