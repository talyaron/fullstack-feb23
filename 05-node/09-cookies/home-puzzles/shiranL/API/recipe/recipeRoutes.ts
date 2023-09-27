import express from "express";
import { addPackage } from "./packageCont";
import { isAdmin } from "../user/userMiddlware";



const router = express.Router();
export default router

router
 .post("/add-package",isAdmin, addPackage)
//  .get("/get-all-recipes", getAllRecipes)
//  .get("/get-My-recipes", getUserRecipes)
//  .delete("/delete-recipe",deleteRecipe)

