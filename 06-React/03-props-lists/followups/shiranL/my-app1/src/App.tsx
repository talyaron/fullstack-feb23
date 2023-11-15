import React from 'react';
import User from './components/User/User';
import Product from './components/Product/Product';
import './App.scss';

import { users } from './util/users';
import {products} from './util/products';

function App() {
  return (
    <div className="App"> 
       <div className='productsList'>
        <h1>Products List</h1>
      </div>
      
    <div className='products'>
    {products.map((product) => {
        return <Product key={product.id} name={product.name} price={product.price} id={0} category={product.category} >
          <p>i am children</p>
          </Product>;
      })}
      </div>
   
    
    
   
    </div>
  );
}


export default App;
