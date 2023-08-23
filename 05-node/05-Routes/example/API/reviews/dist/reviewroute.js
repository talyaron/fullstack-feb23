"use strict";
exports.__esModule = true;
var express_1 = require("express");
var reviewCont_1 = require("./reviewCont");
var router = express_1["default"].Router();
router
    .get('/get-review', reviewCont_1.GetReview)
    .post("/add-review", reviewCont_1.addReview)["delete"]("/delete-review", reviewCont_1.deleteReview)
    .patch('/update-review', reviewCont_1.updateReview);
exports["default"] = router;
