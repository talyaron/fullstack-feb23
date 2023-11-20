import { FC } from 'react'
import { Product } from './Card'
import { categorysColor } from '../controllers/categorysColor';

const CartItem: FC<Product> = ({ title, price, brand, category, images }) => {
    const color = categorysColor(category);

    return (
        <div>
            <img src={images[0]} alt="" />
            <h3>{brand}, {title}</h3>
            <h4>{price}$</h4>
            <div className="category" style={{ backgroundColor: `${color}` }}>{category}</div>
        </div>
    )
}

export default CartItem