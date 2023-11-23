import React, { useState } from 'react'
import { products } from '../src/assets/products'



const Product = ({products}) => {
  
  const productList = products.products
  const [productsArr,setProducts]= useState<any[]>(productList)
  

  const handleRemove=(ev)=>{
    setProducts(
      productsArr.filter((productsList) => {
        return productsList.id != ev.target.value;
      })
    );
  }
  const getCategoryColor = (category) => {
    const categoryColors = {
      smartphones: 'lightblue',
      laptops: 'lightgreen',
      fragrances:'yellow',
      skincare:'brown',
      groceries:'green'
      // Add more categories and colors as needed
    };

    return categoryColors[category] || 'white';
  };
  


  
  return (
    <div className='productlist__items'>
      
      {productsArr.map((product) => {
        const backgroundColor = getCategoryColor(product.category);
        

        return (
          <div className='productlist__items__item' key={product.id} style={{ backgroundColor: backgroundColor }}>
           
              <>
                <img src={product.thumbnail} alt="" />
                <h3>Category: {product.category}</h3>
                <h3>Name: {product.title}</h3>
                <h3>Brand: {product.brand}</h3>
                <h3>Rating: {product.rating}</h3>
                <h3>Price: {product.price}</h3>
                <div className='CRUDbuttons'>
                  <button className='buttonstyle' onClick={handleRemove} value={product.id}> Remove</button>
                 
                </div>
              </>
           
          </div>
        );
      })}
    </div>
  );
}

export default Product
