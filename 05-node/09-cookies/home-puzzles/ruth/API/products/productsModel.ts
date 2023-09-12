import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  imgUrl: String,
  price: Number,
  title: String,
  description: String,
  email: { type: String, required: true },
  customersCart: [String],
  customersWishList: [String],
});

const ProductModel = mongoose.model("product", productSchema);
export default ProductModel;

// customersCart: {
//   type: [String],
//   require: false,
//   validate: {
//     validator: function (value) {
//       return !this.customersCart.includes(value);
//     },
//     message: "Value in customersCart must be unique",
//   },
// },
// customersWishList: {
//   type: [String],
//   require: false,
//   validate: {
//     validator: function (value) {
//       return !this.customersWishList.includes(value);
//     },
//     message: "Value in customersWishList must be unique",
//   },
// },
