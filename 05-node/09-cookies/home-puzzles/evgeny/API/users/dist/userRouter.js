"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCont_1 = require("./userCont");
var router = express_1["default"].Router();
router
    .post("/register", userCont_1.registerUser)
    .post("/login", userCont_1.login)
    .get("/getUser", userCont_1.getUser);
exports["default"] = router;
