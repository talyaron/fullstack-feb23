import React, { useEffect, useState } from 'react'
import { getProductByID } from '../../api/productsApi';
import { useParams } from 'react-router-dom';


const ProductPage = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    const handleGetProductByID = async () => {
        try {
            if (id) {
                const data = await getProductByID(id);
                setProduct(data)
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        handleGetProductByID();
    }, []);

    return (
        <div>{JSON.stringify(product)}</div>
    )
}

export default ProductPage