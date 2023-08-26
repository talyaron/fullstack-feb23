"use strict";
// usersRouters.ts  
exports.__esModule = true;
var usersCont_1 = require("./usersCont");
var express_1 = require("express");
var router = express_1["default"].Router();
exports["default"] = router;
router
    .get('./usersCont.ts', usersCont_1.getUsers)
    .post('/API/tasks/addUser', usersCont_1.addUser);
