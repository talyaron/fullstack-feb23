"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCont_1 = require("./userCont");
var router = express_1["default"].Router();
// add user
router.post('/add-user', userCont_1.addUser)
    // get all users
    .get('/get-users', userCont_1.getUsers)
    // get user by id
    .get('/:userId', userCont_1.getUserById);
// edit user
router.put('/:userId', userCont_1.updateUserInfo);
//delete user
router["delete"]('/:userId', userCont_1.deleteUser);
exports["default"] = router;
