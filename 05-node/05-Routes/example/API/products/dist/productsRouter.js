"use strict";
exports.__esModule = true;
var express_1 = require("express");
var productsCont_1 = require("./productsCont");
var router = express_1["default"].Router();
router
    .get('/get-products', productsCont_1.getProducts)
    .post("/add-product", productsCont_1.addProduct)["delete"]("/delete-product", productsCont_1.deleteProduct)
    .patch('/update-product-price', productsCont_1.updateProductPrice);
exports["default"] = router;
