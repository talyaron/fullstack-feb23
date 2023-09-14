import { RecipeModel } from "../recipes/recipesModel";

export async function getUserRecipes(req:any, res:any) {
    try {
        //get user id from cookie
        const userID = req.cookie.user; //speshel identefayer
        console.log("userID after login:", userID)
        debugger
        if (!userID) {
            throw new Error("userID is required");
        }
        console.log(userID)
        const recipeDB = await RecipeModel.findById(userID);
        console.log(recipeDB)
        res.send({ recipes: recipeDB });

    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}