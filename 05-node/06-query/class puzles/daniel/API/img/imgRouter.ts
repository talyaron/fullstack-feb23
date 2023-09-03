import express from "express";
import { getImg,addImg,deleteImg,updateImg } from './imgCont'
const router = express.Router();

router.get('/get-img', getImg)
      .post('/add-img', addImg)
      .delete('/delete-img', deleteImg)
      .patch('/update-img', updateImg)


export default router;