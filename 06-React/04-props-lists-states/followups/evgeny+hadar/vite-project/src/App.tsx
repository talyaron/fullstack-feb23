import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { products } from './assets/products'
import Product from './../components/Product';
import Button from '../components/Button'


function App() {
  
  const productList = products.products
  const [productsArr,setProducts]= useState<any[]>(productList)
  const [showList, setShowList] = useState(false);
  
  let userId = productList[0].id
  console.log(userId)

  function renderList(){
    setShowList(!showList)
  }

  
  
  return (
    <div className='mainlist'>
    
     <Button handleClick={renderList} freetext='showlist' > </Button>
     {showList && (
      <div className='productlist'>
      <Product products={products} />
      </div>
     ) }

    </div>
  )
}

export default App
