import  axios  from 'axios';
export async function getAllUsers(){
    try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
        return data
    } catch (error) {
        console.error(error)
    }
}