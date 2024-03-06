import { View, Text, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="To Cart" onPress={() => navigation.navigate("cart")} />
    </View>
  );
};

export default Home;
