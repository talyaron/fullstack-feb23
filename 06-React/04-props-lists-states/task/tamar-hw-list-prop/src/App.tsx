import { useState } from 'react'
import './App.css'
import { products } from './data/products'
import ProductCard from './component/Card'

function App() {
  const [productsArr, setProducts] = useState<any[]>(products)

  const handleRemove = (ev:any) => {
    setProducts(
      productsArr.filter((product) => {
        return product.id != ev.target.value;
      })
    )
  }

  return (
    <>
    <div>
      {productsArr.map((product) => (
        <ProductCard
          id = {product.id}
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          discountPercentage={product.discountPercentage}
          rating={product.rating}
          stock={product.stock}
          brand={product.brand}
          category={product.category}
          thumbnail={product.thumbnail}
          handleRemove={handleRemove}/> 
      ))}
    </div>
    </>
  )
}

export default App
