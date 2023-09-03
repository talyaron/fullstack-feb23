import express from "express";
import { addImage, deleteImage, getImage, updateImage } from "./controllers";
const imageRoutes = express.Router();
imageRoutes
  .post("/add-image", addImage)
  .get("/get-image", getImage)
  .patch("/update-image", updateImage)
  .delete("/delete-image", deleteImage);

export default imageRoutes;
