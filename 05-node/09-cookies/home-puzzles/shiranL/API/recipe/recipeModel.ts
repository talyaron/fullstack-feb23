// recipe model
 import { Schema, model } from 'mongoose';


 const categoryOptions = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert', 'Other'];
//define recipe schema
export const RecipeSchema = new Schema({
    recipeName: String,
    recipeIngredients: String,
    recipeInstructions: String,
    imageUrl: String,
    category: {
        type: String,
        enum: categoryOptions, // Set the enum property to the array of allowed values
      },
    userEmail: {
        type: String,
        required: true  
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

  //recipes collection in the DB
  export const RecipeModel = model("recipes", RecipeSchema)