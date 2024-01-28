import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const getPlaylist = createAsyncThunk(
  "get-playlist-by-user-id",
  async (user_id, thunkApi) => {
    try {
      const { data } = await axios.get(
        `/API/songs/get-user-playlist/${user_id}`,
      )
      if (!data || data === undefined)
        throw new Error(`Could not get playlist from db`)
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
