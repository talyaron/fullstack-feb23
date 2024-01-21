// userRegister.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserRegistration {
  userRegistration: any;
  username: string;
  email: string;
  password: string;
}

const initialState: UserRegistration = {
    username: "",
    email: "",
    password: "",
    userRegistration: undefined
};

const userRegistrationSlice = createSlice({
  name: "userRegistration",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    resetRegistration: (state) => {
      state.username = "";
      state.email = "";
      state.password = "";
    },
  },
});

export const { setUsername, setEmail, setPassword, resetRegistration } = userRegistrationSlice.actions;

export const userRegisterSelector = (state: RootState) => state.userRegistration

export const userRegistrationReducer = userRegistrationSlice.reducer;

export type RootState = ReturnType<typeof userRegistrationReducer>;
