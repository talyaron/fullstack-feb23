"use strict";
// usersRouters.ts  
exports.__esModule = true;
var usersCont_1 = require("./usersCont");
var express_1 = require("express");
var router = express_1["default"].Router();
exports["default"] = router;
router
    .get("/get-all-users", usersCont_1.getAllUsers)
    .post("/add-user", usersCont_1.addUser)
    .post("/log-in", usersCont_1.logIn);
