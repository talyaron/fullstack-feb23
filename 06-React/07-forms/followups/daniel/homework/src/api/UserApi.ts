import axios from 'axios'

export interface UserData{
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
    }
    return data
  } catch (error) {
    console.error(error)
  }
}

export default userLogin