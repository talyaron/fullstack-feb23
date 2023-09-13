import express from 'express'
import {getRecipes, addRecipe, deleteRecipe, updateRecipe, getRecipe} from "./recipesCont"
const router = express.Router();

router.get('/get-recipes', getRecipes)
      .get('/get-recipe', getRecipe)
      .post('/add-recipe', addRecipe)
      .delete('/delete-recipe', deleteRecipe)
      .patch('/update-recipe', updateRecipe );

export default router;
