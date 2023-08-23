import express from 'express'
import { addOrder, deleteorder, getorders, updateCart } from './ordersCont';
// import { addProduct, deleteProduct, getProducts, updateProductPrice } from './ordersCont';
const router = express.Router();


router
    .get('/get-orders', getorders)
    .post("/add-order", addOrder)
    .delete("/delete-order", deleteorder)
    .patch('/update-order-cart', updateCart)


export default router;