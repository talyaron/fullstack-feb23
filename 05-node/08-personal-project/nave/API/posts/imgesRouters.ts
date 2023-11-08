import express from 'express'
import { getImages,addImg, getUserImages, } from './imgesCont';
const router = express.Router();

router.get('/get-images', getImages)
      .post("/add-img", addImg)
      .get("/get-users-img", getUserImages);



export default router;