import React, { useState } from 'react';
import Product from './Product';
import './App.css';

interface ProductData {
  id: number;
  name: string;
  category: string;
  rating: number;
  img: string;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>([
    { id: 1, name: 'Wires', category: 'Electronics', rating: 2.7, img: 'https://absolutepcbassembly.com/wp-content/uploads/2023/07/wire-and-cable.jpeg' },
    { id: 2, name: 'Zara', category: 'Clothing', rating: 4.2, img: 'https://static.zara.net/photos///2023/I/0/3/p/9000/814/800/102/w/824/9000814800_15_1_1.jpg?ts=1698921925977' },
    { id: 3, name: 'Intel Chip 7.1', category: 'Electronics', rating: 4.8, img: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-07/220728-chips-sj-241-92b1f0.jpg' },
  ]);

  const [showHighlyRated, setShowHighlyRated] = useState(false);

  const removeProduct = (id: number) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const addProduct = (id: number) => {
    setProducts((newProducts) => newProducts.filter((product) => product.id += id));
    console.log("add")
  };

  const filteredProducts = showHighlyRated
    ? products.filter((product) => product.rating > 4.5)
    : products;

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={() => setShowHighlyRated((prev) => !prev)}>
        {showHighlyRated ? 'Show All Products' : 'Show Highly Rated Products'}
      </button>

      {filteredProducts.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          category={product.category}
          rating={product.rating}
          img={product.img}
          onRemove={removeProduct}
          onAdd={addProduct}
        />
      ))}
    </div>
  );
};

export default App;
