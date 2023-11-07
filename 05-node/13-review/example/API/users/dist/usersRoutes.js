"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersCtrl_1 = require("./usersCtrl");
var router = express_1["default"].Router();
router
    .get("/get-user-by-cookie", usersCtrl_1.getUser)
    .post("", usersCtrl_1.register);
//good routing example :/api/users
// .get("") <-- to get ALL users
// .get("/:id") <-- to get a specific user by the id
// .post("") <-- create a user
// .patch("/:id") <-- update a specific field ot information in a user 
// .put("") <-- update entire user
exports["default"] = router;
