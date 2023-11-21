// import { useState } from 'react'
import './App.scss'
import { products } from './util/products'
import Card from './components/Card'
import { useState } from 'react'
import { Product } from './components/Card'
import CartItem from './components/CartItem'
// export const categorysColor = (category) => {
//   debugger
//   const categorysColor = categories.find(c => c.category === category);
//   return categorysColor;
// }

function App() {
  const sum = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total = total + cart[i].price;
    }
    return total;
  }
  const [cart, setCart] = useState<Product[]>([])

  const [sortProductsList, setSortProductsList] = useState(products.products)
  const sortProducts = () => {
    const newProductsList = sortProductsList.sort((a, b) => {
      if (a.rating < b.rating) {
        return -1;
      }
      if (a.rating > b.rating) {
        return 1;
      }
      return 0;
    })
    setSortProductsList([...newProductsList])
  }

  const addItem = (ev) => {
    const userProduct = products.products.find(
      (product) => product.id === parseInt(ev.target.value)
    );
    if (cart === undefined || userProduct === undefined) return;
    setCart([...cart, userProduct])
  };
  const removeItem = (ev) => {

    const userProduct = cart.filter(
      (product) => product.id !== parseInt(ev.target.value)
    );
    if (cart === undefined || userProduct === undefined) return;
    setCart(userProduct)
  };

  return (

    <div className='main'>
      <div className="title">
        <button onClick={sortProducts}>Sort products by ratings</button>
        <h1>Welcome to my store</h1>
      </div>
      <div className="products">

        {sortProductsList.map((product) => {
          return <div className="product">
            <Card key={product.id} title={product.title} description={product.description} price={product.price} brand={product.brand} category={product.category} images={product.images} discountPercentage={product.discountPercentage} id={product.id} rating={product.rating} stock={product.stock} thumbnail={product.thumbnail} />
            <button onClick={addItem} value={product.id}>ADD</button>

          </div>

        })}
      </div>

      <div className="cart">
        <div className="title">
          <h2>this is your cart</h2>
        </div>
        {cart.map((product) => {
          return <div className='cart-item'>
            <CartItem id={product.id} title={product.title} description={product.description} price={product.price} brand={product.brand} category={product.category} images={product.images} discountPercentage={product.discountPercentage} rating={product.rating} stock={product.stock} thumbnail={product.thumbnail} />
            <button onClick={removeItem} value={product.id}>X
            </button>
          </div>
        })}
        <div className="sum"><h3>
          <strong>Total: {sum()}$</strong>
        </h3>
        </div>
      </div>
    </div>


  )
}
export default App