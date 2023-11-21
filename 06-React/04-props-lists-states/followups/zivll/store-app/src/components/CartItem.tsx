import { FC } from 'react'
import { Product } from './Card'
import { categorysColor } from '../controllers/categorysColor';

const CartItem: FC<Product> = ({ title, price, brand, category }) => {
    const color = categorysColor(category);

    return (
        <div>
            {/* <img src={images[0]} alt="" /> */}
            <h5>{brand}, {title}</h5>
            <h5>{price}$</h5>
            <div className="category" style={{ backgroundColor: `${color}` }}>{category}</div>
        </div>
    )
}

export default CartItem