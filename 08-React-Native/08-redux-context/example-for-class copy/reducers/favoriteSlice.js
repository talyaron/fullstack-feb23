import { createSlice } from "@reduxjs/toolkit";

// interface
const initialState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
      // state.ids = state.ids.push(action.payload.id)
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
// export const mealsSelector = (state) => state.favoritesIds.ids;
export default favoritesSlice.reducer;
