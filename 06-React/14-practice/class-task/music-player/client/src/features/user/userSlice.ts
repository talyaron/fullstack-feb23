import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

enum Status {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}

export interface User {
  id: number;
  name: string;
  password: string|null;
  username: string|null;
  email: string;
}

interface UserState {
  currentUser: User ;
  status: Status;
}

const initialState: UserState = {
  currentUser: {
    id: 0,
    name:"",
    password: "",
    username: "",
    email: ""
  },
  status: Status.IDLE,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName(state, action) {
      state.currentUser.username = action.payload
    },
    setPassword(state, action) {
      state.currentUser.password = action.payload
    },
    setLoading(state, action) {
      state.status = action.payload
    },
    // setError(state, action) {
    //   state.Fa. = action.payload
    // },
    clearUser(state) {
      state.currentUser = initialState.currentUser
    },
  },
})

export const { setUserName, setPassword, clearUser } = userSlice.actions
export const userSelector = (state: RootState) => state.user.currentUser
export const statusSelector = (state: RootState) => state.user.status

export default userSlice.reducer
