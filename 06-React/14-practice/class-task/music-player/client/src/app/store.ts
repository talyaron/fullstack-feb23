import { configureStore, createSlice, ThunkAction, Action, PayloadAction } from "@reduxjs/toolkit";

interface UserRegistration {
  username: string;
  email: string;
  password: string;
}

const initialState: UserRegistration = {
  username: "",
  email: "",
  password: "",
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

const rootReducer = {
  userRegistration: userRegistrationSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
