import { useState } from 'react';
import products from '../../util/Products';


const ProductCard = () => {
    const [productsArr, setProducts] = useState<any[]>(products.products);

  const handleRemove = (ev:any) => {
    setProducts(productsArr.filter((product) =>{
      return product.id != ev.target.value;
    }))
  }

  const selectRating = ()=>{
    setProducts(productsArr.filter((product)=>{
        return product.rating > 4.5
    }))
  }

  const selectSmartphones =()=>{
    setProducts(productsArr.filter((product)=>{
        return product.category == 'smartphones'
    }))
  }

  const selectLaptops =()=>{
    setProducts(productsArr.filter((product)=>{
        return product.category == 'laptops'
    }))
  }

  const selectFragrances =()=>{
    setProducts(productsArr.filter((product)=>{
        return product.category == 'fragrances'
    }))
  }

  const selectSkincare =()=>{
    setProducts(productsArr.filter((product)=>{
        return product.category == 'skincare'
    }))
  }
  


  
  return (
    <div style={{display:'flex', lineHeight: '35px', flexDirection: 'column'}}>
        <button className='btn' onClick={selectRating}>Above 4.5 rating</button>
        <button onClick={selectSmartphones}>Smartphones</button>
        <button onClick={selectLaptops}>Laptops</button>
        <button onClick={selectFragrances}>Fragrances</button>
        <button onClick={selectSkincare}>skincare</button>
        {productsArr.map((product)=>{
          return(
            <div style={{fontSize:'17px', marginBottom: '20px', borderRadius: '70px'}} className={product.category} key={product.id}>
              <h1>{product.title}</h1>
              <div style={{display: 'flex', margin: 'auto', justifyContent: 'center', padding: '60px'}}>
              <div className='information'>
              <p><span>Description:</span> {product.description}</p>
              <p><span>Price:</span> {product.price}</p>
              <p><span>DiscountPercentage:</span> {product.discountPercentage}</p>
              <p><span>Rating:</span> {product.rating}</p>
              <p><span>Stock:</span> {product.stock}</p>
              <p><span>Brand:</span> {product.brand}</p>
              <p><span>Category:</span> {product.category}</p>
              <p><span>Thumbnail:</span> {product.thumbnail}</p>
              </div>
              <div style={{display: 'flex', alignItems: 'center'}}>
              <img style={{width:'250px'}} src={product.images[2]} alt={product.title} />
              </div>
              </div>
              <button style={{marginBottom: '12px'}} onClick={handleRemove} value={product.id}>Delete</button>
            </div>
          )
        })}
      </div>
  )
}

export default ProductCard