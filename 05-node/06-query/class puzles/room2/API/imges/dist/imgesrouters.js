"use strict";
exports.__esModule = true;
var express_1 = require("express");
var imgesCont_1 = require("./imgesCont");
var router = express_1["default"].Router();
router.get('/get-images', imgesCont_1.getImages);
exports["default"] = router;
