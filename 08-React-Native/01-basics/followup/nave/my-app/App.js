import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity, FlatList } from "react-native";
import ImagePicker from "react-native-image-picker";

export default function App() {
  const [imageUri, setImageUri] = useState("https://panek-otam.co.il/wp-content/uploads/2020/10/3-1.png");
  const [textInputValue, setTextInputValue] = useState("");
  const [imagesList, setImagesList] = useState([]);

  const selectImage = () => {
    const options = {
      title: "Select Image",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };
        setImageUri(source.uri);
      }
    });
  };

  const handleAddImage = () => {
    if (imageUri && textInputValue) {
      setImagesList([...imagesList, { id: Date.now().toString(), imageUri, text: textInputValue }]);
      setImageUri(""); // Reset the imageUri state
      setTextInputValue(""); // Reset the text input value
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={selectImage}>
        <Image source={{ uri: imageUri }} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.textDummy}>Hello from gili!</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 15 }}>
        <TextInput
          placeholder="write here..."
          keyboardType="numeric"
          value={textInputValue}
          onChangeText={(text) => setTextInputValue(text)}
        />
        <Button title="ADD" onPress={handleAddImage} />
      </View>
      <FlatList
        data={imagesList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.imageUri }} style={styles.image} />
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: "center",
  },
  textDummy: {
    color: "#3700ff",
    borderWidth: 1,
    borderColor: "red",
    borderStyle: "dashed",
    margin: 10,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    margin: 10,
  },
});
