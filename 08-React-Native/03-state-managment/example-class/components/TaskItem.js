import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

const TaskItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.task}</Text>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    backgroundColor: colors.purplePrimary,
    borderColor: colors.white,
    borderWidth: 1,
  },
  itemText: {
    color: colors.white,
  },
});
