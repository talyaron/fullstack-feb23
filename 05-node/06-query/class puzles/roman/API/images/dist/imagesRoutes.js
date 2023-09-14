"use strict";
exports.__esModule = true;
var express_1 = require("express");
var imagesCont_1 = require("./imagesCont");
var router = express_1["default"].Router();
router
    .get("/get-images", imagesCont_1.getImages)
    .post("/add-image", imagesCont_1.addImage)
    .patch("/update-image", imagesCont_1.updateImage);
exports["default"] = router;
