import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{}}>
      <View
        style={{
          backgroundColor: "red",
          height: 100,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          height: 100,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          height: 100,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
