import axios from "axios";

export const getUserFromServer = (email:string,password:string) => {
    return fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: email,
    password: password,
  })
})
.then(res => res.json())
.catch(error => console.error('Error:', error)); 
}

export const getAllUsersFromApi = async () => {
  const {data} = await axios.get("https://dummyjson.com/users")
  return data.users;
}
