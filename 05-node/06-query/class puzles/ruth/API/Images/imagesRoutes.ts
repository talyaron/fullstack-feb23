import  express from 'express';
import { addImgToUser, deleteImg, getImgsByEmail, updateTitle } from './imagesCont';
 
const router = express.Router();

router
.post("/add-img-to-user",addImgToUser )
.get('/get-imgs-by-user', getImgsByEmail )
.delete("/delete-img", deleteImg)
.patch("/update-title", updateTitle)

export default router