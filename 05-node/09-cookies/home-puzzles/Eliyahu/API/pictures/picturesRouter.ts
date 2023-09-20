import express from "express";
import { addPicture, deletePicture, getNextPicture, getPictures, getPicturesByTag, getTags, getUserPictures, updatePicture } from "./picturesConts";
import { isAdmin, isPremium } from "../users/userMiddleware";

const router = express.Router();

router
    .get('/get-pictures', getPictures)
    .get('/get-tags', getTags)
    .get('/get-pictures-by-tag', getPicturesByTag)
    .get('/get-pictures-by-user', getUserPictures)
    .get('/get-next-picture',getNextPicture)
    
    .post('/add-picture', isPremium, addPicture)

    .delete('/delete-picture', deletePicture)

    .patch('/update-picture', updatePicture)

export default router