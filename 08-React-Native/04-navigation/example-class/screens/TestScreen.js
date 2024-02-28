import React from "react";
import { View, Text, Button } from "react-native";

const TestScreen = ({ setShowTest }) => {
  return (
    <View>
      <Text>TestScreen</Text>
      {/* <Button
        title={"To home"}
        onPress={() => {
          setShowTest(false);
        }}
      /> */}
    </View>
  );
};

export default TestScreen;
