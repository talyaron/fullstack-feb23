"use strict";
exports.__esModule = true;
var express_1 = require("express");
var productsCont_1 = require("./productsCont");
var productsMiddleWare_1 = require("./productsMiddleWare");
var router = express_1["default"].Router();
router
    .get("/get-products-by-owner-email", productsMiddleWare_1.getUser, productsCont_1.getProductByOwnerEmail)
    .get("/get-wishlist-by-email", productsMiddleWare_1.getUser, productsCont_1.getProductsToWishlist)
    .get("/get-cart-by-email", productsMiddleWare_1.getUser, productsCont_1.getProductsToCart)
    .get("/get-all-products", productsCont_1.getAllProducts) //not need user
    .post("/create-product", productsMiddleWare_1.getUser, productsCont_1.createProduct)
    .post("/add-product-to-cart", productsMiddleWare_1.getUser, productsCont_1.addProductToCart)
    .post("/add-product-to-wishlist", productsMiddleWare_1.getUser, productsCont_1.addProductToWishList)
    .patch("/update-product-info", productsMiddleWare_1.getUser, productsCont_1.updateProductInfo)["delete"]("/delete-product", productsMiddleWare_1.getUser, productsCont_1.deleteProduct)["delete"]("/delete-wishlist-prod", productsMiddleWare_1.getUser, productsCont_1.deleteWishlistProduct)["delete"]("/delete-cart-prod", productsMiddleWare_1.getUser, productsCont_1.deleteCartProduct);
exports["default"] = router;
