"use strict";
exports.__esModule = true;
var usersCont_1 = require("./usersCont");
var express_1 = require("express");
var router = express_1["default"].Router();
router
    .post("/login", usersCont_1.login)
    .post("/add-user", usersCont_1.addUser);
exports["default"] = router;
