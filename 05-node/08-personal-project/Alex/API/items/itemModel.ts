import mongoose from 'mongoose';
const { Schema , model} = mongoose ;

export const ItemSchema = new Schema({
  itemName: String, // String is shorthand for {type: String}
  itemDesc: String,
  itemUrl: String,
});

export const ItemModel = model("items",ItemSchema)


