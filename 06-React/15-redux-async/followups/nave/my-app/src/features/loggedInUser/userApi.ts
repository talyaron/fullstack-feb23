import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getUserApi = createAsyncThunk("get-user",async () => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/2')
        if(!data) throw new Error("no data on fuction getUserApi in userApi.ts")
        return data
    } catch (error) {
        console.error(error) 
        
    }
    
}) 
 