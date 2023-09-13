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
const router = express.Router();

router
  .get("/get-products-by-owner-email", getProductByOwnerEmail)
  .get("/get-Wishlist-by-email", getProductsToWishlist)
  .post("/create-product", createProduct)
  .post("/add-product-to-cart", addProductToCart)
  .post("/add-product-to-wishlist", addProductToWishList)
  .delete("/delete-product", deleteProduct)
  .patch("/update-product-info", updateProductInfo)
  .get("/get-all-products", getAllProducts);
export default router;
