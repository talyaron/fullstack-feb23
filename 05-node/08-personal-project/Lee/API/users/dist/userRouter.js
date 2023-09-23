"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCont_1 = require("./userCont");
var middlewareUsers_1 = require("./middlewareUsers");
var router = express_1["default"].Router();
router
    .post("/register", userCont_1.registerUser)
    .post("/login", userCont_1.login)
    .get("/userWithRelatives", middlewareUsers_1.isAdmin, userCont_1.getUserAndRelatives);
exports["default"] = router;
