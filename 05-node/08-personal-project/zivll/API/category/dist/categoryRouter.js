"use strict";
exports.__esModule = true;
var express_1 = require("express");
var categoryCont_1 = require("./categoryCont");
var usersCont_1 = require("../users/usersCont");
var categoryRoutes = express_1["default"].Router();
categoryRoutes
    .post("/add-category", usersCont_1.isAdmin, categoryCont_1.addCategoey)
    .get("/get-categories", categoryCont_1.getCategories);
exports["default"] = categoryRoutes;
