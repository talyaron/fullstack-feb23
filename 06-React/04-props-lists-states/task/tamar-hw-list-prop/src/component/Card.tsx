import React, { FC } from 'react'
import BgColor from './bgcolor';
import { products } from '../data/products';

interface Card {
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
    images?: string;
    handleRemove: any;
}

const ProductCard: FC<Card> = ({id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, handleRemove }) => {
    return (
        <div className='productCard' key={id} style={{backgroundColor: `${BgColor({category})}`}}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>price: {price}</p>
            <p>discount: {discountPercentage}</p>
            <p>rating: {rating}</p>
            <p>stock: {stock}</p>
            <p>brand: {brand}</p>
            <p>category: {category}</p>
            <img src={thumbnail} />
            <button onClick={handleRemove} value={id}>DELETE</button>  
        </div>
    )
}

export default ProductCard
