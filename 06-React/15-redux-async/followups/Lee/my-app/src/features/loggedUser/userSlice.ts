import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

enum Status {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}

interface UserState {
  value: any
  status: Status
}

const initialState: UserState = {
  value: {
    name: "Shay-Lee",
  },
  status: Status.IDLE,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
})

export const userSelector = (state: RootState) => state.user.value
export const userStatusSelector = (state: RootState) => state.user.status

export default userSlice.reducer
