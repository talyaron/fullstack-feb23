import axios from "axios"

const API_URL = "https://jsonplaceholder.typicode.com"

export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`)
        console.log(response)
        const {data} = response
        return data
    } catch (error) {
        console.error(error)
    }
}