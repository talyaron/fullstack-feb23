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
   
  return (
    <div className='productlist__items'>

      {productsArr.map((products) => {
        return (
          <div className='productlist__items__item' key={products.id} >
            <img src={products.thumbnail} alt="" />
            <h3>Category:{products.category}</h3>
            <h3>name: {products.title}</h3>
            <h3>Brand:{products.brand}</h3>
            <h3>Rating:{products.rating}</h3>
            <h3>Price:{products.price}</h3>
            
            <button className='buttonstyle' onClick={handleRemove}  value={products.id}> Remove</button>
            </div>
        );
      })}
    </div>
  )
}

export default Product
