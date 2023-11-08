import { RecipeModel } from "./recipesModel";

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
    const userId = req.cookies.user
    console.log("add-recipe userID:", userId)

    //add recipe using mongoose
    const newRecipe = new RecipeModel({ title, description, urlImg, userId });
    const recipeDB = await newRecipe.save(); //save to DB
    console.log(recipeDB);

    // Query the database to retrieve all recipes for the user
    const userRecipes = await RecipeModel.find({ userId });
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
    const userId = req.cookies.user
    console.log("add-recipe userID:", userId)


    // Query the database to retrieve all recipes for the user
    const userRecipes = await RecipeModel.find({ userId });

    // Send the array of user's recipes as the response
    res.send({ recipes: userRecipes });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

//update DB by recipe-ID and user-id
export async function updateRecipe(req: any, res: any) {
  try {
    const { id, title, description, urlImg } = req.body; //the data fron claient store in this variables

    const currentRecipe = await RecipeModel.findById(id); //find current recipe by id
    if (!currentRecipe) throw new Error("recipe not found");

    // Update the recipe properties
    if (title) {
      currentRecipe.title = title;
    }
    if (description) {
      currentRecipe.description = description;
    }
    if (urlImg) {
      currentRecipe.urlImg = urlImg;
    }

    //get user id from cookie
    const userId = req.cookies.user
    console.log("add-recipe userID:", userId)

    // Save the updated recipe to the user
    const updatedRecipe = await currentRecipe.save();
    console.log(updatedRecipe)

    // Query the database to retrieve all recipes for the user
    const userRecipes = await RecipeModel.find({ userId });

    // Send the array of user's recipes as the response
    res.send({ recipes: userRecipes });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}
