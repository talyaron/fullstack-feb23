import axios from "axios";

const PRODUCT_API = "https://fakestoreapi.com/"

export const getProducts = async ()=> {
    try {
        await axios.get(PRODUCT_API)
    } catch (error) {
        console.error(error)
    }
}

