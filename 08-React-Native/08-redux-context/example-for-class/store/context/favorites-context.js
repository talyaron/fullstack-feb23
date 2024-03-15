import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addMeal: (id) => {},
  removeMeal: (id) => {},
});

import React from "react";

const FavoritesContextProvider = ({ children }) => {
  const [favoritesMealsIds, setFavoritesMealsIds] = useState([]);

  function addMeal(id) {
    setFavoritesMealsIds((prevState) => [...prevState, id]);
  }

  // [1,2,3,4]
  // 3
  // shallow copy: [1, 2 ,4]

  function removeMeal(id) {
    setFavoritesMealsIds((prevState) =>
      prevState.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favoritesMealsIds,
    addFavorite: addMeal,
    removeFavorite: removeMeal,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
