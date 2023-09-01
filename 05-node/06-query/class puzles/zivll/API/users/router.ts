import express from "express";
import { addUser, checkUser, signIn } from "./controllers";
const userRoutes = express.Router();
userRoutes
  .post("/check-user", checkUser)
  .post("/register", addUser)
  .post("/login", signIn);
// .get("/get-image", getImage)
// .patch("/update-image", updateImage)
// .delete("/delete-image", deleteImage);

export default userRoutes;
