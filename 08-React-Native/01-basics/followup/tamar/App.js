// # followup:

// 1. open the lecture and create a copy of the app without copying
//    https://dribbble.com/shots/20007121-Burger-Bang-Food-ordering-App

import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textDummy}>Hello from tamar!</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 15,
        }}
      >
        <TextInput placeholder="write here..." keyboardType="numeric" />
        <Button title="ADD" />
      </View>
      <Text style={styles.textDummy}>Hello!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  textDummy: {
    color: "#3700ff",
    borderWidth: 1,
    borderColor: "red",
    borderStyle: "dashed",
  },
});
