import axios from "axios";

export const getAllPosts = async () => {
    try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }
}