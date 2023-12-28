/* eslint-disable prettier/prettier */
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getUserFakeApi = createAsyncThunk('get-user', async () => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users/5')
        if (!data) throw new Error("no data on functionn getUserFakeApi in file userApi.ts")
        return data
    } catch (error) {
        console.error(error) // this is temporary
    }
})
// Async thunk action to perform login
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://dummyjson.com/auth/login', userData);
            return response.data;
        } catch (error) { //@ts-ignore
            return rejectWithValue(error.response?.data); // Optional: Return specific error data
        }
    }
);