import axios from "axios";

const API_URL="https://dog.ceo/api/breeds/list/all"

const getDogs = async () => {
try {
    const {data} = await axios.get(`${API_URL}`)
    return data.message
} catch (error) {
    console.error(error)
}
}

export default getDogs;

