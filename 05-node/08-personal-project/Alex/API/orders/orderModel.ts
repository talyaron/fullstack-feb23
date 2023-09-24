import mongoose from 'mongoose';
const { Schema , model} = mongoose ;

export const OrderSchema = new Schema({
  userName: String, // String is shorthand for {type: String}
  userMail: String,
  orderItems: [{ itemName: String, itemDesc: String,itemUrl: String,id:Number }] // Array of items,

});

export const OrderModel = model("orders",OrderSchema)