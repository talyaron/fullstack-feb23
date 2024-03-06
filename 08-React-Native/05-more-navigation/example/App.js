import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home/Home";
import Profile from "./screens/profile/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./navigators/HomeNavigator";

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ route }) => {
          if (route.name === "cart") {
            return { headerShown: false };
          } else {
            return {};
          }
        }}
      >
        <Drawer.Screen
          component={HomeNavigator}
          name="main"
          // options={{
          //   title: "Home",
          // }}
        />
        <Drawer.Screen
          component={Profile}
          name="profilePage"
          options={{
            title: "Profile",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
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

// tabBarIcon: ({focused, color, size}) => {
//   let iconName

// }
