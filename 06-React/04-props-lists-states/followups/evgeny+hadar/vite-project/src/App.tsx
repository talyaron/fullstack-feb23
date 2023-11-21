import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { products } from './assets/products'


function App() {
  const [count, setCount] = useState(0)
  const productList = products.products
  let userId = productList[0].id
  console.log(userId)

  return (
    <>
     <div>
      
     </div>
     
    </>
  )
}

export default App
