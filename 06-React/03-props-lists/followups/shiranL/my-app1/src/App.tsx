import React, { useState } from 'react';

import Product from './components/Product/Product';
import './App.scss';


import {products} from './util/products';
interface Product {
  id: number;
  name: string;
  imgSrc?: string;
  price: number;
  category: string;
}

function App() {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const addToProductList = (product: Product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  return (
    <div className="App"> 
       <div className='productsList-container'>
        <h1>Products List</h1>
        <ul className='productsList'>
          {selectedProducts.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>

    <div className='products-Container'>
    <h1>Products</h1>
    <div className='products'>
    {products.map((product) => {
        return <Product key={product.id} imgSrc={product.imgSrc} name={product.name} price={product.price} id={product.id} category={product.category}  // Pass the addToProductList function as a prop
        onAddToList={() => addToProductList(product)}>
          {/* <p>i am children</p> */}
          </Product>;
      })}

</div></div>
   
    
    
   
    </div>
  );
}


export default App;
