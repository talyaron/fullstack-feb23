import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Logo from "./assets/adaptive-icon.png";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View
        style={{
          backgroundColor: "red",
          // height: 100,
          // width: 100,
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          // height: 100,
          // width: 100,
          justifyContent: "center",
          alignItems: "center",
          flex: 6,
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          // height: 100,
          // width: 100,
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text>3</Text>
      </View> */}
      <Image style={{ width: 100, height: 100 }} source={Logo} />
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: "https://www.1800flowers.com/blog/wp-content/uploads/2021/05/Birthday-Flowers-Colors.jpg",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 700,
    // 3
  },
});
