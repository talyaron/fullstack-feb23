import axios from "axios";

export const logIn = async (username: string, password: string) => {
    try {
        const { data } = await axios.post('https://dummyjson.com/auth/login', { username, password })
        return data
    } catch (error) {
        console.error('Error:', error);
    }
}