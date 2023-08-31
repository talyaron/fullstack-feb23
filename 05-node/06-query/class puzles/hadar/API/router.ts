import express from 'express';
import { addImg, deleteImg, getImgs, updateImg } from './cont';
const router = express.Router();


router
    .get('/get-products', getImgs)
    .post("/add-product", addImg)
    .delete("/delete-product", deleteImg)
    .patch('/update-product-price', updateImg)


export default router;