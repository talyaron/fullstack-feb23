"use strict";
exports.__esModule = true;
var express_1 = require("express");
var productsCont_1 = require("./productsCont");
var productsMiddleWare_1 = require("./productsMiddleWare");
var router = express_1["default"].Router();
router
    // .get("/get-product-as-admin", isAdmin)
    .get("/get-products-by-owner-email", productsMiddleWare_1.getUser, productsCont_1.getProductByOwnerEmail)
    .get("/get-Wishlist-by-email", productsMiddleWare_1.getUser, productsCont_1.getProductsToWishlist)
    .post("/create-product", productsMiddleWare_1.getUser, productsCont_1.createProduct)
    .post("/add-product-to-cart", productsMiddleWare_1.getUser, productsCont_1.addProductToCart)
    .post("/add-product-to-wishlist", productsMiddleWare_1.getUser, productsCont_1.addProductToWishList)["delete"]("/delete-product", productsMiddleWare_1.getUser, productsCont_1.deleteProduct)
    .patch("/update-product-info", productsMiddleWare_1.getUser, productsCont_1.updateProductInfo)
    .get("/get-all-products", productsCont_1.getAllProducts);
exports["default"] = router;
