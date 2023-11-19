import { useState } from "react";
import "./App.css";
import { products } from "./util/products";
import { images } from './../../../../example-list/src/util/images';
// 1. given a list of product, render a list of product cards that showcases the product information.

// 2. by button press, user can remove an item from the list.

// 3. give the products diffrent background color based on the catagorie they have.

// 4. by button press, show only products above 4.5 ratings.

// 5. make the cards presentable using scss.
function App() {
  const [productsArr, setProducts] = useState<any[]>(products);



  const handleRemove = (ev) => {
    // const newArr = imagesArr.filter((image) => {
    //   if (image.id == ev.target.value){
    //     return
    //   } else {
    //     return image
    //   }
    // })
    
    // setImages(newArr)

    setProducts(
      productsArr.filter((product) => {
        return product.id != ev.target.value;
      })
    );
  }

  // const handleUpdate = (ev) => {
  //   const newTitle = prompt("Enter new Title")
  //   setImages(imagesArr.map((image) => {
  //     if(image.id == ev.target.value) {
  //       return {...image, title: newTitle}
  //     } else {
  //       return image
  //     }
  //   }))
  // }
   


  return (
    <div>
      {productsArr.map((product) => {
        return (
          <div key={product.id}>
            
            <h5>{product.title}</h5>
            <p  className={product.category}> {product.category}</p>
            <img src={product.images[1]} alt={product.title} />
            <button onClick={handleRemove} value={product.id}>DELETE</button>
            {/* <button onClick={handleUpdate} value={product.id}>UPDATE</button> */}
          </div>
        );
      })}
    </div>
  );
}

export default App;
