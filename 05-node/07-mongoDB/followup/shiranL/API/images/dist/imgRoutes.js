"use strict";
exports.__esModule = true;
var imgCont_1 = require("./imgCont");
var express_1 = require("express");
var router = express_1["default"].Router();
exports["default"] = router;
router
    .post("/add-img", imgCont_1.addImg);
