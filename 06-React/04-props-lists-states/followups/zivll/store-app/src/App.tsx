// import { useState } from 'react'
import './App.scss'
import { products } from './util/products'
import Card from './components/Card'
import { cart } from './model/cart'
function App() {
  // const [count, setCount] = useState(0)

  return (

    <div className='main'>
      <div className="title">
        <h1>Welcome to my store</h1>
      </div>
      <div className="products">
        {products.products.map((product) => { return <Card key={product.id} title={product.title} description={product.description} price={product.price} brand={product.brand} category={product.category} image={product.images[1]} discountPercentage={product.discountPercentage} id={product.id} /> })}
      </div>
      <div className="cart">{cart.map((product) => { return <div>{product}</div> })}</div>
    </div>


  )
}

export default App
// title: string,
//     description: string,
//     price: number,
//     brand: string,
//     category: string,
//     image: string,
//     discountPercentage: number