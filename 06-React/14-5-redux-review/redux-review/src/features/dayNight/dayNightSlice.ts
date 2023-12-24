import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// enum DayNightType {
//     DAY = "day",
//     NIGHT = "night"
// }

// day = true, night = false

export interface DayNightState {
  value: boolean;
}

const initialState: DayNightState = {
  value: true,
};

// const [dayNight, setDayNight] = useState({value: false})
export const dayNightSlice = createSlice({
  name: "dayNight",
  initialState,
  reducers: {
    setDayNight: (state) => {
      state.value = !state.value;
    },
    setDay: (state) => {
      state.value = true;
    },
    setNight: (state) => {
      state.value = false;
    },
    setToUserPrefernce: (state, action) => {
      console.log(action.type);
      state.value = action.payload;
    },
  },
});

export const { setDayNight, setDay, setNight, setToUserPrefernce } =
  dayNightSlice.actions;

export const dayNightSelector = (state: RootState) => state.dayNight.value;

export default dayNightSlice.reducer;
