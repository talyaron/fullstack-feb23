import { ImageBackground, Pressable, View, Text } from "react-native";
import Button from "./Button";

export const CameraPreview = ({
  photo,
  savePhoto,
  retakePicture,
  hasMediaPermissions,
}) => {
  console.log("sdsfds", photo);
  return (
    <View
      style={{
        backgroundColor: "transparent",
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={{
          flex: 1,
        }}
      />
      <View>
        <Button title={"Re-take"} icon="retweet" onPress={retakePicture} />
        {hasMediaPermissions ? (
          <Button title={"Save"} icon="check" onPress={savePhoto} />
        ) : null}
      </View>
    </View>
  );
};
