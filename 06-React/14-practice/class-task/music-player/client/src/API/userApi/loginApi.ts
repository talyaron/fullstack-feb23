import axios from "axios"

export const BASE_URL = "/API/users"

interface LoginData {
  user_name: string
  password: string
}

export const loginUser = async (loginData: LoginData) => {
  try {
    const response = await axios.post(` ${BASE_URL}/login-user`, loginData)
    console.log(response)
    console.log("Login response:", response.data)
    if (response.data.ok) {
      sessionStorage.setItem("user", response.data.results.password)

      // Redirect to the home page
      window.location.href = "/home-page"
    } else {
      // Authentication failed
      console.error(response.data.msg)
    }
  } catch (error) {
    console.error("Error during user login:", error)
    return false
  }
}
