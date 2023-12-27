import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../app/store"

export interface DayLightState {
  value: boolean
}

const initialState: DayLightState = {
  value: true,
}

export const dayNightSlice = createSlice({
  name: "dayLight",
  initialState,
  reducers: {
    setDayLight: (state) => {
      state.value = !state.value
    },
    setDay: (state) => {
      state.value = true
    },
    setNight: (state) => {
      state.value = false
    },
    setToUserPreference: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setDayLight, setDay, setNight, setToUserPreference } =
  dayNightSlice.actions

export const dayNightSelector = (state: RootState) => state.dayNight.value
export default dayNightSlice.reducer
