import { View, Text } from "react-native";
import React from "react";
import { MEALS } from "../data/data";

const MealsScreen = ({ route }) => {
  // const route = useRoute()

  const { categoryId } = route.params;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  return (
    <View>
      <Text>MealsScreen - {categoryId}</Text>
    </View>
  );
};

export default MealsScreen;
