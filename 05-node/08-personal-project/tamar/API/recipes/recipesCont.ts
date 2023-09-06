import { RecipeModel } from "./recipesModel"

export async function getRecipes(req:any, res:any) {
    try {
        const recipesDB = await RecipeModel.find({}) //breing all recipes from DB
        res.send({ recipes:recipesDB})
    } catch (error) {
        console.error(error)
    }
}

export async function addRecipe(req:any, res:any) {
    try {
        const {title, description, urlImg} = req.body
        console.log ({title, description, urlImg})
        if(!title || !description) throw new Error("Please complete title and/or description fields");

        //add recipe using mongoose
        const recipe = new RecipeModel({title, description, urlImg})
        const recipeDB = await recipe.save(); //save to DB
        console.log(recipeDB)

        res.send({ok: true});
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}

//delete from DB by ID
export async function deleteRecipe(req:any, res:any) {
    try {
        const {id} = req.body 
        const recipeDB = await RecipeModel.findByIdAndDelete(id)
        res.send({recipeDB})
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

        //the current items are extracted and store in "_" variables
        const {title:_title, description:_description, urlImg:_urlImg} = currentRecipe;

        if(title === ""){
            const recipeDB = await RecipeModel.findByIdAndUpdate(id, {title:_title}, { new: true });
            res.send({ recipeDB });
        } else {
            const recipeDB = await RecipeModel.findByIdAndUpdate(id, {title:title}, { new: true });
            res.send({ recipeDB });
        }

        if(description === ""){
            const recipeDB = await RecipeModel.findByIdAndUpdate(id, {description:_description}, { new: true });
            res.send({ recipeDB });
        } else {
            const recipeDB = await RecipeModel.findByIdAndUpdate(id, {description:description}, { new: true });
            res.send({ recipeDB });
        }

        if(urlImg === ""){
            const recipeDB = await RecipeModel.findByIdAndUpdate(id, {urlImg:_urlImg}, { new: true });
            res.send({ recipeDB });
        } else {
            const recipeDB = await RecipeModel.findByIdAndUpdate(id, {urlImg:urlImg}, { new: true });
            res.send({ recipeDB });
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}