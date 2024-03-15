import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../reducers/favoriteSlice";

export const store = configureStore({
  reducer: {
    favoritesIds: favoriteReducer,
  },
});
