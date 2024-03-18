import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Camera } from "expo-camera";
import ImagePreview from "./components/ImagePreview";

export default function App() {
  const [cameraPermissions, setCameraPermissions] = useState(false);
  const [startCameraState, setStartCameraState] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const askPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermissions(status === "granted");
    };
    askPermissions();
  }, []);

  const takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setImage(photo);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {image ? (
        <ImagePreview />
      ) : startCameraState ? (
        <Camera
          type={cameraType}
          style={{ flex: 1 }}
          ref={(r) => {
            camera = r;
          }}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              backgroundColor: "transparent",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                position: "absolute",
                bottom: 0,
                flexDirection: "row",
                flex: 1,
                width: "100%",
                padding: 20,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  alignSelf: "center",
                  flex: 1,
                  alignItems: "center",
                }}
              ></View>
            </View>
          </View>
        </Camera>
      ) : (
        <View>
          <Pressable
            onPress={() => setStartCameraState(true)}
            style={styles.btn}
          >
            <Text>Take Picture</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#8b8bff",
    padding: 12,
  },
});
