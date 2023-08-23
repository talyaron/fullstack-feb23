import express from 'express'
import { addReview, deleteReview, GetReview, updateReview } from './reviewCont';
const router = express.Router();

 router
.get('/get-review', GetReview)
.post("/add-review", addReview)
.delete("/delete-review", deleteReview)
.patch('/update-review', updateReview)


export default router;