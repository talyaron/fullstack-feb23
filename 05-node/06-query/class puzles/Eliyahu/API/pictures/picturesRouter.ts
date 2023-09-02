import express from "express";
import { addPicture, deletePicture, getPictures, updatePicture } from "./picturesConts";

const router = express.Router();

router
    .get('/get-pictures', getPictures)

    .post('/add-picture', addPicture)
    
    .delete('/delete-picture', deletePicture)

    .patch('/update-picture', updatePicture)

export default router