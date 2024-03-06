import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home/Home";
import Profile from "./screens/profile/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function App() {
  const BottomTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => {
          return {
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "profilePage") {
                iconName = "logo-snapchat";
              }
              return <Ionicons name={iconName} color={color} size={size} />;
            },
            tabBarActiveTintColor: "#7300d8",
            tabBarInactiveTintColor: "#434343",
          };
        }}
      >
        <BottomTab.Screen
          component={Home}
          name="home"
          options={{
            title: "Home",
            // tabBarIcon: ({ color, size }) => {
            //   return <Ionicons name="home" size={size} color={color} />;
            // },
          }}
        />
        <BottomTab.Screen
          component={Profile}
          name="profilePage"
          options={{
            title: "Profile",
            // tabBarIcon: ({ color, size }) => {
            //   return (
            //     <Ionicons name="logo-snapchat" size={size} color={color} />
            //   );
            // },
          }}
        />
      </BottomTab.Navigator>
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
