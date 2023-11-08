// recipe model
 import { Schema, model } from 'mongoose';


 const categoryOptions = ['Chocolates', 'babies', 'Breakfast','Other'];
//define recipe schema
export const PackageSchema = new Schema({
  packageName: String,
  packagePrice: Number,
    imageUrl: String,
    category: {
        type: String,
        enum: categoryOptions, // Set the enum property to the array of allowed values
      },
      userEmail: {
        type: String,
        required: true  
    },
      ProductionDate: {
      type: Date,
      default: Date.now
    }
  });

  //recipes collection in the DB
  export const PackageModel = model("packages", PackageSchema);