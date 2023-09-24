"use strict";
exports.__esModule = true;
var express_1 = require("express");
var itemCont_1 = require("./itemCont");
var router = express_1["default"].Router();
router.post("/addItem", itemCont_1.addItem)
    .get("/getItems", itemCont_1.getItems);
exports["default"] = router;
