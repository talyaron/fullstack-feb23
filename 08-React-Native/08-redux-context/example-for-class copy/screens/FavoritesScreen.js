import { useContext } from "react";
import { Text } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";

function FavoritesScreen() {
  const { ids } = useContext(FavoritesContext);
  return <Text>{JSON.stringify(ids)}</Text>;
}

export default FavoritesScreen;
