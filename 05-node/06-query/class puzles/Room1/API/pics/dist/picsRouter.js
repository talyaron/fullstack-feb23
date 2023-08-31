"use strict";
exports.__esModule = true;
var express_1 = require("express");
var picsCont_1 = require("./picsCont");
var router = express_1["default"].Router();
router
    .get('/get-image', picsCont_1.getImages)
    .post("/add-image", picsCont_1.addImage)["delete"]("/delete-image", picsCont_1.deleteImage)
    .patch("/update-image", picsCont_1.updateImage);
exports["default"] = router;
