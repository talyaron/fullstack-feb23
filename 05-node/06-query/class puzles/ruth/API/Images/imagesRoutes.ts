import  express from 'express';
import { addImgToUser } from './imagesCont';
 
const router = express.Router();

router
.post("/add-img-to-user",addImgToUser )


export default router