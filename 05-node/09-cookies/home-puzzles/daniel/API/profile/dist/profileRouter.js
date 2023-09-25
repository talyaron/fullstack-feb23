"use strict";
exports.__esModule = true;
var express_1 = require("express");
var profileCont_1 = require("./profileCont");
var router = express_1["default"].Router();
router.get('/get-detail', profileCont_1.getDetail)
    .post('/add-detail', profileCont_1.addDetail)
    .patch('', profileCont_1.updateDetails)
    .get('', profileCont_1.getUserDetail);
exports["default"] = router;
