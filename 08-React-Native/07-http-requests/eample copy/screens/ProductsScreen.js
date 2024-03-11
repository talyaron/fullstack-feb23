import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productsApi";

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const handleGetProducts = async () => {
    try {
      const { data } = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleFixImageString = (imageUri) => {
    return "http" + imageUri.split("https")[1];
  };

  return (
    <View>
      <Text>ProductsScreen</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => {
          const result = handleFixImageString(item.image);
          return (
            <View>
              <Image
                source={{
                  uri: result,
                }}
                width={100}
                height={100}
              />
              <Text>{item.description}</Text>
              <Text>{item.price}$</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ProductsScreen;
