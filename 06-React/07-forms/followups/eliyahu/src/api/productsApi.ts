import axios from "axios"


const API_URL = "https://fakestoreapi.com/products"

export const getAllProducts = async () => {
    try {
        const { data } = await axios.get(`${API_URL}`)
        return data
    } catch (error) {
        console.error(error)
    }
}