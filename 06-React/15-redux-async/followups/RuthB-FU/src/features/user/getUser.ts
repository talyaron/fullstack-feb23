import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const  getUserFakeApi = createAsyncThunk("get-user" , async()=>{
    try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/1")
        if(!data) throw new Error("no data available")
        return data
    } catch (error) {
        console.error(error);
    }
})