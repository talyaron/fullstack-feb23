import { useEffect, useState } from 'react'
import './App.css'
import Color from './components/Color/Color'
import { getAllProducts } from './api/productsApi'
import Product from './components/Product/Product'
import { ProductCard } from './types/product'

function App() {

  const [products, setProducts] = useState<ProductCard[]>([])

  const getProducts = async () => {
    try {
      const data = await getAllProducts()
        setProducts(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <>
      <Color />
      {products.length > 0 ? (
        <div>
          {products.map((product) => {
            return <Product key={product.id} product={product} />
          })}
        </div>
      ) : (
        <p>Nothing to show here</p>
      )}
    </>
  )
}

export default App
