import axios from "axios";

export const register = async (email: string, password:string) => {
    try {
        if (!email || !password) throw new Error("no data from client");
       return await axios.post("/api/users/register", {email, password})

    } catch (error) {
        console.error(error)
    }
}