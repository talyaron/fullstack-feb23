import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import dayNightReducer from "../features/dayNight/dayNightSlice";

export const store = configureStore({
  reducer: {
    //dayNight Reducer = global state
    dayNight: dayNightReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
