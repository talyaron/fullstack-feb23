import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { getUserFakeApi } from "./getUser"

enum Status {
  IDLE = "idel",
  LOADING = "loading",
  FAILED = "failed",
}
interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

interface UserState {
  value: User | null
  status: Status
}

const initialState: UserState = {
  value: null,
  status: Status.IDLE,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserFakeApi.pending, (state) => {
        state.status = Status.LOADING
      })
      .addCase(getUserFakeApi.fulfilled, (state, action) => {
        state.status = Status.IDLE
        state.value = action.payload
      })
      .addCase(getUserFakeApi.rejected, (state) => {
        state.status = Status.FAILED
      })
  },
})

export const userSelector = (state: RootState) => state.user.value
export const userStatusSelector = (state: RootState) => state.user.status
export const userStateSelector = (state: RootState) => state.user

export default userSlice.reducer
