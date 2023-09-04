import express from 'express';
import { addProduct, deleteProduct, getProducts, updateProductPrice } from './productsCont';
const router = express.Router();


router
    .get('/get-products', getProducts)
    .post("/add-product", addProduct)
    .delete("/delete-product", deleteProduct)
    .patch('/update-product-price', updateProductPrice)


export default router;