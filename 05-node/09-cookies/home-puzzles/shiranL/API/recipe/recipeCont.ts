import { RecipeModel} from "./recipeModel";
import mongoose, { isValidObjectId } from 'mongoose';

//add recipe
export async function addRecipe(req, res) {
    try {
        const { recipeName, recipeIngredients, recipeInstructions, imageUrl, category, userEmail } = req.body;  

        if (!recipeName || !recipeIngredients || !recipeInstructions || !imageUrl || !category || !userEmail) {
            return res.status(400).json({ msg: "Missing required fields" });
        }   

        const recipe = new RecipeModel({ recipeName, recipeIngredients, recipeInstructions, imageUrl, category, userEmail });
        const recipeDB = await recipe.save();   
        // console.log(recipeDB);
        res.send({ ok:true, recipeDB});
       
    } catch (err) {
        res.status(400).json(err);
    }
}



// Define the getAllRecipe function
export async function getAllRecipes(req, res) {
    try {
        // Fetch all recipes from the database
        const recipes = await RecipeModel.find();

        // Check if there are no recipes
        if (!recipes || recipes.length === 0) {
            return res.status(404).json({ message: "No recipes found." });
        }

        // Return the list of recipes as JSON
        res.status(200).json({ ok: true, recipeList: recipes });
    } catch (error) {
        // Handle any errors that occur during the database query
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}


export async function getUserRecipes(req, res) {
    try {
        // Get the user's email from the request or your authentication system
        const userEmail = req.query.userEmail;
        console.log(userEmail);

        // Query the database to find recipes associated with the user's email
        const recipes = await RecipeModel.find({ userEmail });

        // Check if there are no recipes for the user
        if (!recipes || recipes.length === 0) {
            return res.status(404).json({ message: "No recipes found for this user." });
        }

        // Return the list of recipes as JSON
        res.status(200).json({ ok: true, recipeList: recipes });
    } catch (error) {
        // Handle any errors that occur during the database query or authentication
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}


// Define the deleteRecipe function
export async function deleteRecipe(req, res) {
    try {
        // Get the recipe ID from the request parameters
        const { recipeId } = req.body;

        // Check if the recipe ID is valid (e.g., a valid MongoDB ObjectId)
        if (!isValidObjectId(recipeId)) {
            return res.status(400).json({ message: "Invalid recipe ID" });
        }

        // Find the recipe in the database by its ID and remove it
        const deletedRecipe = await RecipeModel.findByIdAndRemove(recipeId);

        // Check if the recipe was found and deleted
        if (!deletedRecipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        // Return a success message
        res.status(200).json({ ok: true, message: "Recipe Deleted" });
    } catch (error) {
        // Handle any errors that occur during the database operation
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}


