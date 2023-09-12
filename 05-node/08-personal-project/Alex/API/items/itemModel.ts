import mongoose from 'mongoose';
const { Schema , model} = mongoose ;

export const ItemSchema = new Schema({
  itemName: String, // String is shorthand for {type: String}
  itemDesc: String,
  itemUrl: String,
  // comments: [{ body: String, date: Date }],
  // date: { type: Date, default: Date.now },
  // hidden: Boolean,
  // meta: {
  //   votes: Number,
  //   favs: Number
  // }
});

export const ItemModel = model("items",ItemSchema)