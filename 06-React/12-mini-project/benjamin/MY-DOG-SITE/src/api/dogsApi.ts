import axios from "axios";

const getDogs = async () => {
try {
    const {data} = await axios.get("https://dog.ceo/api/breeds/list/all")
    return data.message
} catch (error) {
    console.error(error)
}
}

export default getDogs;