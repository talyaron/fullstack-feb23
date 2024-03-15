import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CameraPreview } from "./components/cameraPreview";
import { Entypo } from "@expo/vector-icons";
import Button from "./components/Button";

export default function App() {
  const [startCameraState, setStartCameraState] = React.useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [hasMediaPermissions, setHasMediaPermissions] = useState();
  const [cameraType, setCameraType] = React.useState(
    Camera.Constants.Type.back
  );

  useEffect(() => {
    const askPermission = async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasMediaPermissions(status === "granted");
    };
    askPermission();
  }, []);

  const startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCameraState(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    console.log(photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  const retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
    startCamera();
  };

  const switchCamera = () => {
    if (cameraType === "back") {
      setCameraType("front");
    } else {
      setCameraType("back");
    }
  };

  const saveImage = async () => {
    if (capturedImage) {
      try {
        await MediaLibrary.createAssetAsync(capturedImage.uri);
        Alert.alert("Picture Saved!");
        setCapturedImage("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {startCameraState ? (
        <>
          {previewVisible && capturedImage ? (
            <CameraPreview
              photo={capturedImage}
              savePhoto={saveImage}
              retakePicture={retakePicture}
              hasMediaPermissions={hasMediaPermissions}
            />
          ) : (
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
                  >
                    <Button
                      title={"Take A picture"}
                      icon={"camera"}
                      onPress={takePicture}
                    />

                    <Button
                      title={"flip"}
                      icon={"retweet"}
                      onPress={switchCamera}
                    />
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={switchCamera}
                style={{
                  marginTop: 20,
                  // borderRadius: "50%",
                  height: 25,
                  width: 25,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                  }}
                >
                  {cameraType === "front" ? "?" : "?"}
                </Text>
              </TouchableOpacity>
            </Camera>
          )}
        </>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={startCamera}
            style={{
              width: 130,
              // borderRadius: 4,
              backgroundColor: "#14274e",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Take picture
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#f1f1f1",
    marginLeft: 10,
  },
});
