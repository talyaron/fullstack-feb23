"use strict";
exports.__esModule = true;
var express_1 = require("express");
var imgCont_1 = require("./imgCont");
var router = express_1["default"].Router();
router.get('/get-img', imgCont_1.getImg)
    .post('/add-img', imgCont_1.addImg)["delete"]('/delete-img', imgCont_1.deleteImg)
    .patch('/update-img', imgCont_1.updateImg);
exports["default"] = router;
