import express from 'express'
import { addImage, deleteImage, getImages, updateImage } from './picsCont';
const router = express.Router();

router
    .get('/get-image', getImages)
    .post("/add-image", addImage)
    .delete("/delete-image", deleteImage)
    .patch("/update-image", updateImage)
export default router;