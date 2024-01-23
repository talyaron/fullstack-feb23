import axios from "axios"
import { Song } from "./getSongApi"
import { createAsyncThunk } from "@reduxjs/toolkit"

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
      debugger
      return data
    } catch (error: any) {
      console.error(error)
      return thunkApi.rejectWithValue({
        error: error.message,
        message: error.message,
      })
    }
  },
)
