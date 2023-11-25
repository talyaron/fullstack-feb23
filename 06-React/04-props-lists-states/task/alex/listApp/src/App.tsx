import React, { useState } from 'react';
import './App.scss';
import { products } from './util/products';
import ProductCard  from './components/ProductCard';

function App() {
  const [productArr, setProducts] = useState<any[]>(products);
  const [showHighRated, setShowHighRated] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const filterHighRatedProducts = () => {
    // const adjustbleRating:number = prompt("Please enter rating");
    const inputRating = prompt("Please enter rating");
    if (inputRating === null || isNaN(Number(inputRating))) {
      alert("Please enter a valid number for rating");
      return;
    }
  
    const adjustableRating = Number(inputRating);

    const highRatedProducts = productArr.filter((product) => product.rating >= adjustableRating);
    setFilteredProducts(highRatedProducts);
    setShowHighRated(true);
  };

  const resetFilter = () => {
    setShowHighRated(false);
    setFilteredProducts([]);
  };

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const productIdToRemove = event.currentTarget.value;
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productIdToRemove));
  };

  const handleUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
    const productIdToUpdate = event.currentTarget.value;
    const inputPrice = prompt("Enter updated price");
    if (inputPrice === null || isNaN(Number(inputPrice))) {
      alert("Please enter a valid number for new price");
      return;
    }
  
    const newPrice = Number(inputPrice);
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productIdToUpdate ? { ...product, price: newPrice } : product
      )
    );
  };

  return (
    <div>
      <button onClick={filterHighRatedProducts}>Show High Rated Products</button>
      <button onClick={resetFilter}>Reset Filter</button>

      {showHighRated
        ? filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleRemove={handleRemove}
              handleUpdate={handleUpdate}
            />
          ))
        : productArr.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleRemove={handleRemove}
              handleUpdate={handleUpdate}
            />
          ))}
    </div>
  );
}


export default App
