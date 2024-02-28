import { View, Text, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/data";
import CategoryItem from "../components/CategoryItem";
import { useNavigation } from "@react-navigation/native";

const CategoriesScreen = ({ navigation }) => {
  // const navigation = useNavigation()

  const renderGridItem = (itemData) => {
    const handlePress = () => {
      navigation.navigate("mealsScreen", { categoryId: itemData.item.id });
    };

    return (
      <CategoryItem
        onPress={handlePress}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
