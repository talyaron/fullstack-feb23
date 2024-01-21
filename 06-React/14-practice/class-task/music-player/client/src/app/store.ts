import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import userReducer from "../features/user/userSlice"
import songReducer from "../features/song/songSlice"
import setPassword from "../components/Password"

export const store = configureStore({
  reducer: {
    user: userReducer,
    song: songReducer,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export { setPassword }

