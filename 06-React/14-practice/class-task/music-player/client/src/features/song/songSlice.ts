import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  song: null,
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setSong(state, action) {
      state.song = action.payload
    },
    setLoading(state, action) {
      state.isLoading = action.payload
    },
    setError(state, action) {
      state.error = action.payload
    },
    clearSong(state) {
      state.song = null
    },
  },
})

export const { setSong, setLoading, setError, clearSong } = userSlice.actions

export default userSlice.reducer
