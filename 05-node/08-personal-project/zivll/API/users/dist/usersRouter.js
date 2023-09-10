"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersCont_1 = require("./usersCont");
var userRoutes = express_1["default"].Router();
userRoutes
    .post("/register", usersCont_1.registerUser)
    .post("/login", usersCont_1.login)
    .patch("/add-income", usersCont_1.addIncome)
    .post("/get-income", usersCont_1.getIncome)
    .post("/check-user", usersCont_1.checkUser);
exports["default"] = userRoutes;
