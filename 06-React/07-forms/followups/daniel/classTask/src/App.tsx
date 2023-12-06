import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorChange from './components/colorChange/ColorChange'
import Product from './components/product/Product'



// ## task


// 1. creat a component that on Mount will present all the product on the list with a matching product card. get products from here: https://fakestoreapi.com/

// 2. have a search field, that allows to filter the products by name. on Submit, the product list will be filtered. have a reset button to reset the list.


function App() {
 


  return (
    <>
    <Product />
      {/* <ColorChange/> */}
    </>
  )
}

export default App
