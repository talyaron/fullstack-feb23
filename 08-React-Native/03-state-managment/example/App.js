import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [listData, setListData] = useState([]);

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setListData((prevState) => [...prevState, inputValue]);
      // setInputValue("");
    }
    // if (inputValue.trim() !== "") {
    //   setListData((prevState) => [
    //     ...prevState,
    //     { text: inputValue, key: Math.random().toString(), id: Math.random().toString() },
    //   ]);
    //   // setInputValue("");
    // }
  };

  return (
    <View style={styles.container}>
      <Text>My Sport List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Submit" onPress={handleAddItem} />
      {/* <FlatList
        data={listData}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      /> */}
      {/* <FlatList
        data={listData}
        renderItem={(itemData) => (
          <View style={styles.item}>
            <Text>{itemData.item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => return item.id}
      /> */}
      <ScrollView>
        {listData.map((elm) => {
          return (
            <Text style={{ fontSize: 50 }} key={elm}>
              {elm}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: "center",
    marginTop: 50,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default App;
