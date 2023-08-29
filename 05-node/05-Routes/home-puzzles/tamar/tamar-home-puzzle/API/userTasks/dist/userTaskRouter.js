"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userTaskCont_1 = require("./userTaskCont");
var router = express_1["default"].Router();
router
    .post("/get-tasks-of-user", userTaskCont_1.getTasksOfUser);
exports["default"] = router;
