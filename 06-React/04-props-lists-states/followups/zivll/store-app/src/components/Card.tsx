
import { FC } from "react"
import { categorysColor } from "../controllers/categorysColor";

export interface Product {

    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

const Card: FC<Product> = ({ title, description, price, brand, category, images, discountPercentage, rating }) => {
    const color = categorysColor(category);

    const fullprice = (price * discountPercentage) / 100 + price
    return (
        <div className='card'>
            <img src={images[0]} alt={title} />
            <h3>{brand}, {title}</h3>
            <p>{description}</p>
            <h4>{price}$</h4>
            <p>rating: {rating}</p>
            <h4 className='fullprice'>{Math.round(fullprice)}$</h4>
            <div className="category" style={{ backgroundColor: `${color}` }}>{category}</div>
            {/* <div className="category" style={{ backgroundColor: `${color}` }}>{category}</div> */}

        </div>
    )
}

export default Card
