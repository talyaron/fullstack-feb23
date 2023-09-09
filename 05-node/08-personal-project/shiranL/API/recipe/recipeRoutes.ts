import express from "express";
import { addRecipe,getAllRecipes,getUserRecipes,deleteRecipe } from "./recipeCont";



const router = express.Router();
export default router

router
 .post("/add-recipe", addRecipe)
 .get("/get-all-recipes", getAllRecipes)
 .get("/get-My-recipes", getUserRecipes)
 .delete("/delete-recipe",deleteRecipe)

