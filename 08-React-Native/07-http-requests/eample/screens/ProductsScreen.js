import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getProducts } from "../api/productsApi";

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);

  const handleFixImageString = (imageUri) => {
    return "http" + imageUri.split("https")[1];
  };
  useEffect(() => {
    async function fetchData() {
      const data = await getProducts();
      setProducts(data);
    }

    fetchData();
  }, []);
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
      />
    </View>
  );
};

export default ProductsScreen;
