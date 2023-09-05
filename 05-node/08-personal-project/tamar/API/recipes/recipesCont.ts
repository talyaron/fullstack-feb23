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
        const {id, title, description, urlImg} = req.body

        const currentRecipe = await RecipeModel.findById(id); //find current recipe by id
        if(!currentRecipe) throw new Error("recipe not found"); 

        if(title === ""){
            this.title = currentRecipe.title
        } else {
            this.title = title
        }

        if(description === ""){
            this.description = currentRecipe.description
        } else {
            this.description = description
        }

        if(urlImg === ""){
            this.urlImg = currentRecipe.urlImg
        } else {
            this.urlImg = urlImg
        }

        const recipeDB = await RecipeModel.findByIdAndUpdate(id, {title:this.title}, {description:this.description}, {urlImg:this.urlImg});

        res.send(recipeDB)
        
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}