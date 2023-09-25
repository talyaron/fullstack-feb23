import express from "express";
import { addPicture, deletePicture, getPictures, getPicturesByTag, getTags, getUserPictures, updatePicture } from "./picturesConts";
import { isAdmin, isPremium } from "../users/userMiddleware";

const router = express.Router();

router
    .get('/get-pictures', getPictures)
    .get('/get-tags', getTags)
    .get('/get-pictures-by-tag', getPicturesByTag)
    .get('/get-pictures-by-user',isPremium, getUserPictures)
    
    .post('/add-picture', isPremium, addPicture)

    .delete('/delete-picture',isPremium, deletePicture)

    .patch('/update-picture',isPremium, updatePicture)

export default router