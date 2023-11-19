import { FC } from 'react'
import { addItem } from '../controllers/addItem'
interface Product {
    title: string,
    description: string,
    price: number,
    brand: string,
    category: string,
    image: string,
    discountPercentage: number,
    id: number
}
const Card: FC<Product> = ({ title, description, price, brand, category, image, discountPercentage, id }) => {
    const fullprice = (price * discountPercentage) / 100 + price
    return (
        <div className='product'>
            <img src={image} alt={title} />
            <h3>{brand}, {title}</h3>
            <p>{description}</p>
            <h4>{price}</h4>
            <h4 className='fullprice'>{fullprice}</h4>
            <div className="category">{category}</div>
            <button onClick={addItem} value={id}>ADD</button>
        </div>
    )
}

export default Card

// id: 1,
// title: "iPhone 9",
// description: "An apple mobile which is nothing like apple",
// price: 549,
// discountPercentage: 12.96,
// rating: 4.69,
// stock: 94,
// brand: "Apple",
// category: "smartphones",
// thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
// images: [