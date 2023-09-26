"use strict";
exports.__esModule = true;
var express_1 = require("express");
var packageCont_1 = require("./packageCont");
var userMiddlware_1 = require("../user/userMiddlware");
var router = express_1["default"].Router();
exports["default"] = router;
router
    .post("/add-package", userMiddlware_1.isAdmin, packageCont_1.addPackage);
//  .get("/get-all-recipes", getAllRecipes)
//  .get("/get-My-recipes", getUserRecipes)
//  .delete("/delete-recipe",deleteRecipe)
