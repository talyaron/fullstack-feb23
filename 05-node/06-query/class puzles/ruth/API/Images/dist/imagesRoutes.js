"use strict";
exports.__esModule = true;
var express_1 = require("express");
var imagesCont_1 = require("./imagesCont");
var router = express_1["default"].Router();
router
    .post("/add-img-to-user", imagesCont_1.addImgToUser);
exports["default"] = router;
