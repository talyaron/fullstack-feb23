"use strict";
exports.__esModule = true;
var express_1 = require("express");
var orderCont_1 = require("./orderCont");
var router = express_1["default"].Router();
router.post("/createOrder", orderCont_1.createOrder);
// router.post("/API/orders/createOrder", createOrder);
exports["default"] = router;
