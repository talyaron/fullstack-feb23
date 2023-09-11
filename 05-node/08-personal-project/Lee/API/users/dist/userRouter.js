"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCont_1 = require("./userCont");
var relativesCont_1 = require("../relatives/relativesCont");
var router = express_1["default"].Router();
router
    .get('/get-user-relatives', relativesCont_1.getUserRelatives)
    .post("/register", userCont_1.registerUser)
    .post("/login", userCont_1.login);
exports["default"] = router;
