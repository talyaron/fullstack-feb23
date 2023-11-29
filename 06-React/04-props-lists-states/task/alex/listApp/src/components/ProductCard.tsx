import React, { FC } from 'react'
import { Product } from '../types/types';


interface ProductCardProps{
    product: Product;
    handleRemove: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleUpdate: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    
}


const ProductCard:FC<ProductCardProps> = ({product,handleRemove,handleUpdate} ) => {
      // Define a mapping of background colors for different product category
  const backgroundColors: Record<string, string> = {
    smartphones: 'brown', 
    groceries: 'green', 
    skincare: 'orange',
    fragrances: 'red',
    snake: 'purple',
    laptops: 'skyblue',
  };

  // Get the background color based on the product category
  const backgroundColor = backgroundColors[product.category] || '#ffffff'; // Default to white if category not found
   
return (
        <div style={{border: "1px solid blue",
                     borderRadius: "5px",
                     backgroundColor
                     }}>
            <p>{product.category}</p>
            <button type="button" onClick={handleRemove} value={product.id}>
                Delete
                </button>
             <button type="button" onClick={handleUpdate} value={product.id}>
                Update
                </button>   
            <h1>{product.title}</h1>
            <p>{product.brand}</p>
            <p>{product.description}</p>
            <p>Price: {product.price}$</p>
            <p>Discount: {product.discountPercentage}%</p>
            <p>Site Rating: {product.rating}</p>
            <p>Items in Stock: {product.stock}</p> 
            {/* <img  src={product.thumbnail}  /> */}
      {/* Render images excluding the thumbnail */}
      <div className="image-container">
  {product.images.map((imageUrl, index) => 
    {
    // Add the condition here to exclude the thumbnail
    if (imageUrl === product.thumbnail) 
     {
      return null; // Return null if imageUrl is the same as product.thumbnail
     } else 
     {
      return (
        <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
             );
     }
    }
                      )
}
</div>
        </div>
    )
}

export default ProductCard