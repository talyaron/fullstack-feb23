"use strict";
exports.__esModule = true;
var userCont_1 = require("./userCont");
var express_1 = require("express");
var userMiddleware_1 = require("./userMiddleware");
var router = express_1["default"].Router();
exports["default"] = router;
router
    .post("/add-user", userCont_1.addUser)
    .post("/log-in", userCont_1.logIn)
    .get("/get-log-in-user", userCont_1.getLoggedInUser)
    .post("/log-out", userCont_1.logOut)
    .get("/get-all-users", userMiddleware_1.isAdmin, userCont_1.allUsers)
    .put("/update-user", userCont_1.updateUser)["delete"]("/delete-user", userCont_1.deleteUser)
    .get("/get-user-details", userCont_1.getUserDetails);
