"use strict";
exports.__esModule = true;
var express_1 = require("express");
var tasksCont_1 = require("./tasksCont");
var router = express_1["default"].Router();
router
    .post("/add-user-task", tasksCont_1.addUserTask);
exports["default"] = router;
