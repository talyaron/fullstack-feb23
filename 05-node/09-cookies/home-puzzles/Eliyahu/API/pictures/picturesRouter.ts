import express from "express";
import { addPicture, deletePicture, getPictures, getPicturesByTag, getTags, getUserPictures, updatePicture } from "./picturesConts";

const router = express.Router();

router
    .get('/get-pictures', getPictures)
    .get('/get-tags', getTags)
    .get('/get-pictures-by-tag', getPicturesByTag)
    .get('/get-pictures-by-user', getUserPictures)
    .post('/add-picture', addPicture)

    .delete('/delete-picture', deletePicture)

    .patch('/update-picture', updatePicture)

export default router