import axios from 'axios'

export interface UserData{
  id?:number,
  username:string,
  password:string
}


const LoginAPI = "https://dummyjson.com/auth/login"

const userLogin = async(username:string,password:string) => {
  try {
    const {data} = await axios.post(`${LoginAPI}`,{username,password})
    console.log('Data:', data);
    console.log(username,password);
    
    if(data){
        sessionStorage.setItem("token", data.token)
        sessionStorage.setItem("User", data.username)
        return {id:data.id, username:data.username,password:data.password}
    }
    return data
  } catch (error) {
    console.error(error)
  }
}

export default userLogin