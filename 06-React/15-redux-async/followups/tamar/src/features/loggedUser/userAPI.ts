import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUserApi = createAsyncThunk('get-user', async () => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/1')
        if (!data) throw new Error("no data on getUserApi in userAPI.ts");
        return data

    } catch (error) {
        console.error(error)
    }
})