import { RecipeModel } from "../recipes/recipesModel";

export async function getUserRecipes(req:any, res:any) {
    try {
        //get user id from cookie
        const userId = req.cookies.user; //speshel identefayer
        console.log("userID after login:", userId)
        if (!userId) {
            throw new Error("userID is required");
        }
        
        const userRecipesDB = await RecipeModel.find({ userId });
     
        console.log("user recipe from DB in getUserRecipe:", userRecipesDB)
        
        res.send({ recipes: userRecipesDB });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}