import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { useState } from "react";
import { colors } from "./constants/colors";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([
    { id: "1", task: "Biceps Curls" },
    { id: "2", task: "leg extensions" },
  ]);

  const handlePress = () => {
    setTasks((prevState) => [
      ...prevState,
      { id: Math.random().toString(), task: task },
    ]);
    // setTasks([...tasks, task])
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>My fitness app!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setTask}
            style={styles.input}
            placeholder="Enter an exercise..."
            name="exercise"
            value={task}
            selectionColor={colors.purplePrimary}
          />
          {/* <Button
            title="ADD"
            onPress={handlePress}
            color={colors.purplePrimary}
          /> */}
          <Pressable onPress={handlePress} style={styles.btn}>
            <Text style={styles.btnText}>ADD</Text>
          </Pressable>
        </View>
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          // <View style={styles.itemContainer}>
          //   <Text style={styles.itemText}>{item.task}</Text>
          // </View>
          <TaskItem item={item} />
        )}
        keyExtractor={(item, index) => {
          return item.id;
        }}
      />

      {/* //string array */}
      {/* <ScrollView>
        {tasks.map((taskElm) => {
          return (
            <View style={styles.itemContainer} key={taskElm}>
              <Text style={styles.itemText}>{taskElm}</Text>
            </View>
          );
        })}
      </ScrollView> */}

      {/* //object array */}
      {/* <ScrollView>
        {tasks.map((taskElm) => {
          return (
            <View style={styles.itemContainer} key={taskElm.key}>
              <Text style={styles.itemText}>{taskElm.task}</Text>
            </View>
          );
        })}
      </ScrollView> */}

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
    // height: 20,
  },
  itemContainer: {
    padding: 20,
    backgroundColor: colors.purplePrimary,
    borderColor: colors.white,
    borderWidth: 1,
  },
  itemText: {
    color: colors.white,
  },
  btn: {
    backgroundColor: colors.purplePrimary,
    padding: 20,
  },
  btnText: {
    color: colors.white,
  },
});
