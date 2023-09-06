import express from 'express'
import {getRecipes, addRecipe, deleteRecipe, updateRecipe} from "./recipesCont"
const router = express.Router();

router.get('/get-recipes', getRecipes)
      .post('/add-recipe', addRecipe)
      .delete('/delete-recipe', deleteRecipe)
      .patch('/update-recipe', updateRecipe );

export default router;
