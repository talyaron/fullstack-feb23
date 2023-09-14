import express from "express";
import {
  addProductToCart,
  addProductToWishList,
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductByOwnerEmail,
  getProductsToWishlist,
  updateProductInfo,
} from "./productsCont";
import { getUser, isAdmin } from "./productsMiddleWare";
const router = express.Router();

router
  // .get("/get-product-as-admin", isAdmin)
  .get("/get-products-by-owner-email", getUser, getProductByOwnerEmail)
  .get("/get-Wishlist-by-email", getUser, getProductsToWishlist)
  .post("/create-product", getUser, createProduct)
  .post("/add-product-to-cart", getUser, addProductToCart)
  .post("/add-product-to-wishlist", getUser, addProductToWishList)
  .delete("/delete-product", getUser, deleteProduct)
  .patch("/update-product-info", getUser, updateProductInfo)
  .get("/get-all-products", getAllProducts);
export default router;
