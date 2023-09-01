import  express from 'express';
import { addImgToUser, getImgsByEmail } from './imagesCont';
 
const router = express.Router();

router
.post("/add-img-to-user",addImgToUser )
.get('/get-imgs-by-user', getImgsByEmail )

export default router