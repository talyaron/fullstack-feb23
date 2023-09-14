"use strict";
exports.__esModule = true;
var express_1 = require("express");
var imgesCont_1 = require("./imgesCont");
var router = express_1["default"].Router();
router.get('/get-images', imgesCont_1.getImages)
    .post("/add-img", imgesCont_1.addImg)
    .get("/get-users-img", imgesCont_1.getUserImages);
exports["default"] = router;
