"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controllers_1 = require("./controllers");
var routes = express_1["default"].Router();
routes
    .post("/add-image", controllers_1.addImage)
    .get("/get-image", controllers_1.getImage)
    .patch("/update-image", controllers_1.updateImage)["delete"]("/delete-image", controllers_1.deleteImage);
exports["default"] = routes;
