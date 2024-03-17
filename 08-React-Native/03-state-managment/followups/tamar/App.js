//followup: beginner: create a followup to my fitness app
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { colors } from "./constants/colors";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    { id: "1", task: "Biceps Curls" },
    { id: "2", task: "leg extension" },
  ]);

  const handlePress = () => {
    setTasks((prevState) => [
      ...prevState,
      { id: Math.random().toString(), task: task },
    ]);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>My Fitness App!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setTask}
            style={styles.input}
            placeholder="Enter an exercise.."
            name="exercise"
            value={task}
            selectionColor={colors.purplePrimary}
          />

          <Pressable onPress={handlePress} style={styles.btn}>
            <Text style={styles.btnText}>ADD</Text>
          </Pressable>
        </View>
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem item={item} />}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 50,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    paddingHorizontal: 30,
  },
  btn: {
    backgroundColor: colors.purplePrimary,
    padding: 20,
  },
  btnText: {
    color: colors.white,
  },
});
