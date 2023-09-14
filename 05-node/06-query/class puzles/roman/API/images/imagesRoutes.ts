import express from 'express'
import { addImage, getImages, updateImage } from './imagesCont';

const router = express.Router();

router
.get("/get-images",getImages)
.post("/add-image", addImage)
.patch("/update-image",updateImage)


export default router;