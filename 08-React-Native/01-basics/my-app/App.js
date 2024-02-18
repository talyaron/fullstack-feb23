import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  SafeAreaView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>Checkout</Text>
      <Image
        style={styles.image}
        source={require("./assets/images/goal.png")}
      />
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <Text style={styles.subtitle}>Delivery</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={"#8b8b8b"}
            placeholder="Delivery Address"
          />
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.subtitle}>Payment</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={"#8b8b8b"}
            placeholder="Card Holder Name"
          />
          <TextInput placeholder="Card Number" />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputHalf}
              placeholderTextColor={"#8b8b8b"}
              placeholder="Expiry Date"
            />
            <TextInput
              style={styles.inputHalf}
              placeholderTextColor={"#8b8b8b"}
              placeholder="Expiry Date"
            />
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button color={"#40C979"} style={styles.btn} title="Done" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF9F0",
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 30,
  },
  image: {
    width: 50,
    height: 50,
    margin: 10,
    alignSelf: "center",
  },
  header: {
    flex: 1,
    fontSize: 30,
    width: "100%",
    marginTop: 50,
    textAlign: "center",
  },
  content: {
    flex: 6,
    width: "100%",
  },
  wrapper: {
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 30,
    gap: 10,
  },
  subtitle: {
    fontSize: 20,
    color: "#444342",
  },
  btn: {
    padding: 20,
  },
  btnContainer: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input: {
    backgroundColor: "#fff",
    padding: 20,
    width: "100%",
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 1,
    borderStyle: "solid",
    shadowColor: "#1f1c1c",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },

  inputContainer: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
  },

  inputHalf: {
    backgroundColor: "#fff",
    padding: 20,
    width: "100%",
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 1,
    borderStyle: "solid",
    shadowColor: "#1f1c1c",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    flex: 1,
  },
});
