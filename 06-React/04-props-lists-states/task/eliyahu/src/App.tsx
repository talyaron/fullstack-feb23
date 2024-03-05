import { useState } from 'react'
import './App.css'
import ProductCard from './components/Product/Product'
import { products } from './util/products'
import { Product } from './types/types'

function App() {
  const [productsArr, setProducts] = useState<Product[]>(products)

  const handleRemove = (ev: any) => {
    const newArrProducts = productsArr.filter((product) => {
      return product.id != ev.target.value
    })
    setProducts(newArrProducts)
  }

  const handleUpdate = (ev: any) => {
    const newPrice = parseInt((prompt("Enter new price")) || "0")
    const newArrProducts = productsArr.map((product) => {
      if (product.id == ev.target.value) {
        return { ...product, price: newPrice }
      } else {
        return product;
      }
    })
    setProducts(newArrProducts)
  }

  const handleHighRating = () => {
    const newArrProducts = productsArr.filter((product) => {
      return product.rating >= 4.5
    })
    setProducts(newArrProducts)
  }

  const handleShowAll = () => {
    setProducts(products)
  }
  return (

    <>
      <button className="fa fa-star" onClick={handleHighRating}>4.5+</button>
      <button onClick={handleShowAll}>SHOW ALL</button>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", }}>
        {productsArr.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              handleRemove={handleRemove}
              handleUpdate={handleUpdate} />
          )
        })}
      </div>
    </>
  )
}

export default App
