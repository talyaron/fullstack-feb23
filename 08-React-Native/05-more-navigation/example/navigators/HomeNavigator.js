import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "./../screens/cart/Cart";
import Home from "../screens/Home/Home";

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="home"
        options={{ headerShown: false }}
      />
      <Stack.Screen component={Cart} name="cart" />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
