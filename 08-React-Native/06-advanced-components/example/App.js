import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

import ModalScreen from "./screens/ModalScreen/ModalScreen";
import StatusBarScreen from "./screens/StatusBarScreen/StatusBarScreen";
import AlertScreen from "./screens/alertScreen/AlertScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ModalScreen />
        <StatusBarScreen />
        <AlertScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
