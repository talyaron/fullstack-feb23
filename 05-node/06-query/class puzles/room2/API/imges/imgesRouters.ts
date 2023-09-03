import express from 'express'
import { getImages, } from './imgesCont';
const router = express.Router();

router.get('/get-images', getImages)
    


export default router;