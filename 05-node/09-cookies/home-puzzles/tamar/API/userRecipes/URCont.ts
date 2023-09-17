import { RecipeModel } from "../recipes/recipesModel";

export async function getUserRecipes(req:any, res:any) {
    try {
        //get user id from cookie
        const userID = req.cookies.user; //speshel identefayer
        console.log("userID after login:", userID)
        if (!userID) {
            throw new Error("userID is required");
        }
        const recipeDB = await RecipeModel.find({userID});
        if(!recipeDB)throw new Error("no recipeDS found");
        console.log("user recipe from DB in getUserRecipe:", recipeDB)
        
        res.send({ recipes: recipeDB });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}