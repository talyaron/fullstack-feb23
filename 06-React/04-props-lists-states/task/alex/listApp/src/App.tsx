import { useState } from 'react';
import './App.scss';
import { products } from './util/products';
import ProductCard  from './components/ProductCard';

function App() {

  const [productArr, setProducts] = useState<any[]>(products);

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Remove button clicked");
    console.log("Product ID:", event.currentTarget.value);
    setProducts (
      productArr.filter((product) => {
        return product.id != event.currentTarget.value;
      }
    )
    )
    console.log("Updated Products:", productArr); // Check the updated state
  };

  const handleUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Update button clicked")
    const newPrice = prompt("Enter updated price");
    setProducts(
      productArr.map((product) => {
        if (product.id == event.currentTarget.value) {
          return { ...product, price: newPrice };
        } else {
          return product;
        }  
      })
    )
    console.log("Updated price:" , newPrice);  
  }; 

  return (
     <div>
      {
        products.map((product) =>{
          return <ProductCard 
          key={product.id}
          product={product}
          handleRemove={handleRemove}
          handleUpdate={handleUpdate}
          />
        })
      }
     </div>
  )
}

export default App
