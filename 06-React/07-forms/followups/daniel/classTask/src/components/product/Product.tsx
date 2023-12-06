import { useEffect, useState } from 'react'
import { getAllProducts } from '../../api/productApi'

import ProductCard,{ProductCardPorps} from '../productCard/ProductCard'
// import { CircularProgress, Typography, Box } from "@mui/material";


// 1. creat a component that on Mount will present all the product on the list with a matching product card. get products from here: https://fakestoreapi.com/

const Product = () => {
  const [products, setProducts] = useState<ProductCardPorps[]>([])
  const [ loading, setLoading] = useState<boolean>(true)

  const handleGetAllProducts = async ()=>{
    try {
      const getData = await getAllProducts()
      if(getData.length > 0){
        setProducts(getData)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    handleGetAllProducts()
  },[])
    
  return (
    <>
    {products.length > 0 ?(
      <div>
        {products.map((product)=>{
          return <ProductCard product={product} />
        })}
      </div>
    ): (
      <p>Loading...</p>
    )}
    </>
  )
}

export default Product