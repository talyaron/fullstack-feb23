"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
router
    .get('/get-user', getUsers)
    .post('/add-user', addUsers)["delete"]('/delete-user', deleteUsers)
    .patch('/update-user', updateUsers);
exports["default"] = router;
