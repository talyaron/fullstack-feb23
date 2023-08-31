"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cont_1 = require("./cont");
var router = express_1["default"].Router();
router
    .get('/get-products', cont_1.getImgs)
    .post("/add-product", cont_1.addImg)["delete"]("/delete-product", cont_1.deleteImg)
    .patch('/update-product-price', cont_1.updateImg);
exports["default"] = router;
