import axios from 'axios'

const API_URL = "https://jsonplaceholder.typicode.com/posts"

export const getAllUsers = async() => {
  try {
    const {data} = await axios.get(`${API_URL}`)
    console.log(data);
    return data
  } catch (error) {
    console.error(error)
  }
}

