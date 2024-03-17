import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { colors } from "../constants/colors";

export default TaskItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.task}</Text>
    </View>
  );
};

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
