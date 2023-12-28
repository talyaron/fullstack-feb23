import axios from "axios"
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUserFakeApi = createAsyncThunk('get-user', async () => {
    try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users/5')
        if(!data) throw new Error("no data on functionn getUserFakeApi in file userApi.ts")
        return data;
    } catch (error) {
        console.error(error)
    }
})