import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { products } from './assets/products'
import Product from './../components/Product';
import Button from '../components/Button'


function App() {
  
  let productList = products.products
 
  const [showList, setShowList] = useState(true);
  const [showNewList, setShowNewList] = useState(false);
  
 


  function renderList(){
    setShowList(!showList)
    
  }

  const test=()=>{
    let newArr:any=[]
    productList.map((Product)=>{

      let search= Product.rating
      if(search>4.50){
        
        newArr.push(Product)
        
      }
    })

     productList =newArr

  }
  
  
  return (
    <div className='mainlist'>
    
     <Button handleClick={renderList} freetext='showlist' > </Button>
     <Button handleClick={test} freetext='show above4.5' > </Button>
     {showList && (
      <div className='productlist'>
      <Product products={products} />
      </div>
     ) }

    </div>
  )
}

export default App
