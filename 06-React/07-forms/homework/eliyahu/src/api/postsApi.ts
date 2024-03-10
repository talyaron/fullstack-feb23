import axios from "axios"

const API_URL = "https://dummyjson.com/posts"


export const getUserPosts = async (userId: number) => {
    try {
        const { data } = await axios.get(API_URL + `/user/${userId}`)
        return data.posts
    } catch (error) {
        console.error('Error:', error)
    }
}