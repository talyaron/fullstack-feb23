import { FC } from 'react'
import { ProductCard } from '../../types/product'

interface productProps {
    product: ProductCard
}

const Product: FC<productProps> = ({ product }) => {

    return (
        <div style={{ border: "1px solid black" }}>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}$</p>
            <img style={{ width: "100px" }} src={product.image} alt={product.title} />
        </div>
    )
}

export default Product