import { FC } from 'react'
import { Product } from '../../types/types'

interface ProductProps {
  product: Product
  handleRemove: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  handleUpdate: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}


const ProductCard: FC<ProductProps> = ({ product, handleRemove, handleUpdate }) => {

  const categoryColor = (category: string) => {
    let backgroundColor: string = ""
    switch (category) {
      case "smartphones":
        backgroundColor = "gray"
        break;
      case "laptops":
        backgroundColor = "green"
        break;
      case "fragrances":
        backgroundColor = "yellow"
    }

    return backgroundColor
  }


  return (

    <div key={product.id} style={{ border: "2px solid gray", borderRadius: "20px", maxWidth: "500px", backgroundColor: categoryColor(product.category) }}>
      <h4>{product.title}</h4>
      <h5>{product.description}</h5>
      <div>
        {product.images.map((image) => {
          return (
            <img style={{ height: "100px", boxShadow: "2px 2px 6px black", marginLeft: "10px" }} src={image} alt={product.title} />
          )
        })}
      </div>
      <h4>{product.price}$</h4>
      <p style={{ color: "gold" }} className="fa fa-star">{product.rating}</p>
      <p>{product.category}</p>
      <button style={{ margin: "5px" }} onClick={handleRemove} value={product.id}>DELETE</button>
      <button onClick={handleUpdate} value={product.id}>UPDATE PRICE</button>

    </div>
  )
}

export default ProductCard