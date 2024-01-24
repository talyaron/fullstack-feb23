import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getPlaylist = createAsyncThunk(
  "get-playlist-by-user-id",
  async (user_id: number, thunkApi) => {
    try {
      const { data } = await axios.get(
        `/API/songs/get-user-playlist/${user_id}`,
      )
      if (!data || data === undefined)
        throw new Error(`Could not get playlist from db`)
      console.log(data)
      return data.result
    } catch (error: any) {
      console.error(error)
      return thunkApi.rejectWithValue({
        error: error.message,
        message: error.message,
      })
    }
  },
)
