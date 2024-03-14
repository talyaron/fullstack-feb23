import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

function FavoritesScreen() {
  const { ids } = useContext(FavoritesContext);
  const [info, setInfo] = useState();

  const getStoredInfo = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("info");
      const result = jsonValue != null ? JSON.parse(jsonValue) : null;
      setInfo(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStoredInfo();
  }, []);

  return (
    <View>
      {/* <Text>{JSON.stringify(ids)}</Text> */}
      <Text>{info && info.text ? info.text : "no text!!"}</Text>
    </View>
  );
}

export default FavoritesScreen;
