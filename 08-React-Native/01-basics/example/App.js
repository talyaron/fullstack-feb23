import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  // View = all containers: div, article, section, main, header, footer (form ?)
  // ScrollView

  // Text = all texts: h1 - h6, p, span

  // TextInput= all input typing types: text, number, email, password ....

  return (
    <View style={styles.container}>
      <Text style={styles.textDummy}>Hello from gili!</Text>
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
