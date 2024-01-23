import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import setPassword from "../components/Password"
import usersPlaylistSlice from "../features/playlist/usersPlaylistSlice"
import songReducer from "../features/song/songSlice"
import userReducer from "../features/user/userSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    song: songReducer,
    playlist: usersPlaylistSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export { setPassword }
