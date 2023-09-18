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
  getProductsToCart,
  deleteWishlistProduct,
  deleteCartProduct,
} from "./productsCont";
import { getUser, isAdmin } from "./productsMiddleWare";
const router = express.Router();

router
  // .get("/get-product-as-admin", isAdmin)
  .get("/get-products-by-owner-email", getUser, getProductByOwnerEmail)
  .get("/get-wishlist-by-email", getUser, getProductsToWishlist)
  .get("/get-cart-by-email", getUser, getProductsToCart)
  .post("/create-product", getUser, createProduct)
  .post("/add-product-to-cart", getUser, addProductToCart)
  .post("/add-product-to-wishlist", getUser, addProductToWishList)
  .delete("/delete-product", getUser, deleteProduct)
  .delete("/delete-wishlist-prod", getUser, deleteWishlistProduct)
  .delete("/delete-cart-prod", getUser, deleteCartProduct)
  .patch("/update-product-info", getUser, updateProductInfo)
  .get("/get-all-products", getAllProducts);
export default router;
