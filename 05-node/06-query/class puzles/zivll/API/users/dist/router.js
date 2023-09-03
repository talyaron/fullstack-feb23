"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controllers_1 = require("./controllers");
var userRoutes = express_1["default"].Router();
userRoutes
    .post("/check-user", controllers_1.checkUser)
    .post("/register", controllers_1.addUser)
    .post("/login", controllers_1.signIn);
// .get("/get-image", getImage)
// .patch("/update-image", updateImage)
// .delete("/delete-image", deleteImage);
exports["default"] = userRoutes;
