"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var Schema = mongoose_1["default"].Schema, model = mongoose_1["default"].model;
var productSchema = new Schema({
    imgUrl: String,
    price: Number,
    title: String,
    description: String,
    email: { type: String, required: true },
    customersCart: [String],
    customersWishList: [String]
});
var ProductModel = mongoose_1["default"].model("product", productSchema);
exports["default"] = ProductModel;
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
