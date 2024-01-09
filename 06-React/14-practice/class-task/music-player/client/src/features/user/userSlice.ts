import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
    setLoading(state, action) {
      state.isLoading = action.payload
    },
    setError(state, action) {
      state.error = action.payload
    },
    clearUser(state) {
      state.user = null
    },
  },
})

export const { setUser, setLoading, setError, clearUser } = userSlice.actions

export default userSlice.reducer
