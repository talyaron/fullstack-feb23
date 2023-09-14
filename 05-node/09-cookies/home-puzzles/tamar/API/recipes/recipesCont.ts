import { RecipeModel } from "./recipesModel";

export async function getRecipes(req: any, res: any) {
  try {
    const userID = req.cookie.user
    console.log("user id in getRecipes:", userID)
    const recipesDB = await RecipeModel.findById(userID); //breing all recipes of user from DB
    console.log(recipesDB)
    res.send({ recipes: recipesDB });
  } catch (error) {
    console.error(error);
  }
}

export async function getOneRecipe(req: any, res: any) {
  try {
    const { id } = req.query;
    if (!id) {
      throw new Error("id is required");
    }

    const recipesDB = await RecipeModel.findById(id); //breing one recipe from DB
    console.log("one recipe in db:", recipesDB);
    res.send({ recipes: recipesDB });
  } catch (error) {
    console.error(error);
  }
}

export async function addRecipe(req: any, res: any) {
  try {
    const { title, description, urlImg } = req.body;
    console.log({ title, description, urlImg });
    if (!title || !description)
      throw new Error("Please complete title and/or description fields");

    //get user id from cookie
    const userId = req.cookie.user
    console.log("add-recipe userID:", userId)

    //add recipe using mongoose
    const newRecipe = new RecipeModel({ title, description, urlImg, userId });
    const recipeDB = await newRecipe.save(); //save to DB
    console.log(recipeDB);
    
    // Query the database to retrieve all recipes for the user
    const userRecipes = await RecipeModel.findById(userId);
    console.log("user's recipes:", userRecipes)
    
    // Send the array of user's recipes as the response
    res.send({ recipes: userRecipes });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

//delete from DB by ID
export async function deleteRecipe(req: any, res: any) {
  try {
    const { id } = req.body; //recipe's id
    console.log(id);
    await RecipeModel.findByIdAndDelete(id);
    
     //get user id from cookie
     const userId = req.cookie.user
     console.log("add-recipe userID:", userId)
 

    // Query the database to retrieve all recipes for the user
    const userRecipes = await RecipeModel.findById(userId);

    // Send the array of user's recipes as the response
    res.send({ recipes: userRecipes });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

//update DB by ID
// export async function updateRecipe(req: any, res: any) {
//   try {
//     const { id, title, description, urlImg, email } = req.body; //the data fron claient store in this variables

//     const currentRecipe = await RecipeModel.findById(id); //find current recipe by id
//     if (!currentRecipe) throw new Error("recipe not found");

//     // Update the recipe properties
//     if (title) {
//       currentRecipe.title = title;
//     }
//     if (description) {
//       currentRecipe.description = description;
//     }
//     if (urlImg) {
//       currentRecipe.urlImg = urlImg;
//     }

//     // Save the updated recipe
//     const updatedRecipe = await currentRecipe.save();
//     // Query the database to retrieve all recipes for the user
//     const userRecipes = await RecipeModel.find({ email });

//     // Send the array of user's recipes as the response
//     res.send({ recipes: userRecipes });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// }
