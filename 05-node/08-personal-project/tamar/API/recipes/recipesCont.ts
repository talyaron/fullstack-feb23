import { RecipeModel } from "./recipesModel"

export async function getRecipes(req:any, res:any) {
    try {       
        const recipesDB = await RecipeModel.find({}) //breing all recipes from DB
        res.send({ recipes:recipesDB})
    } catch (error) {
        console.error(error)
    }
}

export async function getRecipe(req:any, res:any){
    try {
        //get the id from query
        const {id} = req.query;  
        if (!id) throw new Error("no recipe id required");

        const recipeDB = await RecipeModel.find({id}) //bring the specific recipe from DB
        console.log(recipeDB)
        
        res.send(recipeDB)
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message }); 
    }
}

export async function addRecipe(req:any, res:any) {
    try {
        const {title, description, urlImg, email} = req.body
        console.log ({title, description, urlImg, email})
        if(!title || !description) throw new Error("Please complete title and/or description fields");

        //add recipe using mongoose
        const recipe = new RecipeModel({title, description, urlImg, email})
        const recipeDB = await recipe.save(); //save to DB
        console.log(recipeDB)
        //if (!Array.isArray(recipeDB)) throw new Error("recipes in server are not array");  
        // console.log("server Type of recipesDB:", typeof recipeDB);
        // console.log("server Content of recipesDB:", recipeDB);
        
        // res.send({recipeDB});  //need to send back the new array of recipes!! how?

                // Query the database to retrieve all recipes for the user
                const userRecipes = await RecipeModel.find({ email });

                // Send the array of user's recipes as the response
                res.send({ recipes: userRecipes });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

//delete from DB by ID
export async function deleteRecipe(req:any, res:any) {
    try {
        const {id, email} = req.body
        console.log(id) 
        console.log(email)
        await RecipeModel.findByIdAndDelete(id)
                        // Query the database to retrieve all recipes for the user
                       const userRecipes = await RecipeModel.find({email});

                        // Send the array of user's recipes as the response
                        res.send({ recipes: userRecipes });
        
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

//update DB by ID
export async function updateRecipe(req:any, res:any) {
    try {
        const {id, title, description, urlImg} = req.body //the data fron claient store in this variables

        const currentRecipe = await RecipeModel.findById(id); //find current recipe by id
        if(!currentRecipe) throw new Error("recipe not found"); 

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

        // Save the updated recipe
        const updatedRecipe = await currentRecipe.save();
        res.send({ updatedRecipe });
        
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}