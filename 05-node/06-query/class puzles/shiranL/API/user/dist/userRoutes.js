"use strict";
exports.__esModule = true;
var userCont_1 = require("./userCont");
var express_1 = require("express");
var router = express_1["default"].Router();
exports["default"] = router;
router
    .post("/add-user", userCont_1.addUser)
    .post("/log-in", userCont_1.logIn);
