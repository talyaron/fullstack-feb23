// Product.tsx

import React, { useState, useEffect } from "react";
import Select from "react-select";
import { fetchProducts, IApi } from "../Api";
import "./product.css";
import Colors from "../../colors/Colors";

export function Product() {
  const [items, setItems] = useState<IApi[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [textColor, setTextColor] = useState("black"); // Initial color

  useEffect(() => {
    async function fetchAndSetProducts() {
      try {
        const products = await fetchProducts();
        setItems(products);

        const categories = Array.from(
          new Set(products.map((item: { category: any }) => item.category))
        );
        setUniqueCategories(categories as string[]);
      } catch (error) {
        console.log("Error from product function ", error);
      }
    }

    fetchAndSetProducts();
  }, []);

  const handleCategoryChange = (selectedOption: any) => {
    setSelectedCategory(selectedOption.value);
  };

  const options = uniqueCategories.map((category) => ({
    value: category,
    label: category,
  }));

  const handleColorChange = (newColor: string) => {
    setTextColor(newColor);
  };

  return (
    <div className="container">
      <h1>Products</h1>
      <Colors onColorChange={handleColorChange} />
      <Select
        className="quantity"
        id="quantity"
        onChange={handleCategoryChange}
        options={options}
        placeholder="Select a category"
      />
      {items.length > 0 && (
        <div className="product-container">
          {items
            .filter(
              (item) => !selectedCategory || item.category === selectedCategory
            )
            .map((item) => (
              <div
                key={item.id}
                className="product-card"
                style={{ color: textColor }}
              >
                <h2>{item.title}</h2>
                <h3>${item.price}</h3>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <img
                  src={item.image}
                  alt={item.title}
                  className="product-image"
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Product;
