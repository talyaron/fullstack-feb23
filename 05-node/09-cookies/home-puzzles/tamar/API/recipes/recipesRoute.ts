import express from 'express'
import {addRecipe, deleteRecipe,  getOneRecipe} from "./recipesCont"
const router = express.Router();

router.get('/get-one-recipe', getOneRecipe)
      .post('/add-recipe', addRecipe)
      .delete('/delete-recipe', deleteRecipe);
      //.patch('/update-recipe', updateRecipe );

export default router;
