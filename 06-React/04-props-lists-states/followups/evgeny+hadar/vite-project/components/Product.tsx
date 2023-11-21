import React from 'react'
import { products } from '../src/assets/products'

const Product = () => {

  const productList = products.products


  return (
    <div>
      <h1>hi</h1>
      {productList[1].id}
    </div>
  )
}

export default Product
