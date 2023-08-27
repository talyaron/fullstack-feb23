"use strict";
exports.__esModule = true;
exports.getAllUsers = exports.addUser = void 0;
var usersModel_1 = require("./usersModel");
var users = [new usersModel_1.User("shiran", "123456")];
//add user controler    
exports.addUser = function (req, res) {
    try {
        var user = req.body;
        console.log(user);
        //add to users array
        users.push(new usersModel_1.User(user.userName, user.password)); // --> add to Database
        console.log(users);
        res.send({ users: users });
    }
    catch (error) {
        console.error(error);
    }
};
//get all users controler
exports.getAllUsers = function (req, res) {
    try {
        res.send({ users: users });
    }
    catch (error) {
        console.error(error);
    }
};
