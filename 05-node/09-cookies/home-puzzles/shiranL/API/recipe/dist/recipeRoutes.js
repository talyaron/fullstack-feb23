"use strict";
exports.__esModule = true;
var express_1 = require("express");
var recipeCont_1 = require("./recipeCont");
var router = express_1["default"].Router();
exports["default"] = router;
router
    .post("/add-recipe", recipeCont_1.addRecipe)
    .get("/get-all-recipes", recipeCont_1.getAllRecipes)
    .get("/get-My-recipes", recipeCont_1.getUserRecipes)["delete"]("/delete-recipe", recipeCont_1.deleteRecipe);
