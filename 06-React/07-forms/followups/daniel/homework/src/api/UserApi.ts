import axios from 'axios'

export interface UserData{
  id:number,
  username:string,
  password:string
}


const LoginAPI = "https://dummyjson.com/auth/login"

const userLogin = async(username:string,password:string,id:number) => {
  try {
    const {data} = await axios.post(LoginAPI,{username,password,id})
    console.log('Data:', data);
    
    if(!data || typeof data.id === 'undefined'){
      throw new Error("No data or id found")
   
    }
    sessionStorage.setItem("token", data.token)
    return {id:data.id, username:data.username}
    
  } catch (error) {
    console.error(error)
  }
}

export default userLogin