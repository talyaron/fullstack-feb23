import axios from "axios";

const PRODUCT_API = "https://fakestoreapi.com"

export const getAllProducts = async ()=> {
    try {
        const {data} = await axios.get(`${PRODUCT_API}/products`)
        return data
    } catch (error) {
        console.error(error)
    }
}

