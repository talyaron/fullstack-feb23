
import axios from "axios";

const PostAPI = "https://dummyjson.com/posts"

export const getPost = async()=>{
    try {
        const {data} = await axios.get(`${PostAPI}`)
        console.log('post:',data);
        
        return data
    } catch (error) {
        console.log(error);
        
    }
}