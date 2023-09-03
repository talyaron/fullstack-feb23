import express from 'express';
import { addImg, deleteImg, getImgs, updateImg } from './cont';
const router = express.Router();


router
    .get('/get-imgs', getImgs)
    .post("/add-img", addImg)
    .delete("/delete-img", deleteImg)
    .patch('/update-img', updateImg)


export default router;