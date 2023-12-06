import axios from "axios";

const PRODUCT_API = "https://fakestoreapi.com"

export const getAllProducts = async ()=> {
    try {
        const getData = await axios.get(`${PRODUCT_API}/products`)
        return getData
    } catch (error) {
        console.error(error)
    }
}

