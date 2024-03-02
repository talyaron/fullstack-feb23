import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import TestScreen from "../screens/TestScreen";

export default function App() {
  const [showTest, setShowTest] = useState(false);
  if (showTest) {
    return <TestScreen setShowTest={setShowTest} />;
  } else {
    return (
      <View style={styles.container}>
        <Button
          title={"to test"}
          onPress={() => {
            setShowTest(true);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
