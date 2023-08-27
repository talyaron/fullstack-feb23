"use strict";
exports.__esModule = true;
exports.getUserLogIn = exports.logIn = exports.getAllUsers = exports.addUser = void 0;
var usersModel_1 = require("./usersModel");
//add user controler    
exports.addUser = function (req, res) {
    try {
        var user = req.body;
        if (!user.userName || !user.password) {
            res.send({ users: usersModel_1.users, success: false, message: "user name and password are required" });
            return;
        }
        //add to users array
        usersModel_1.users.push(new usersModel_1.User(user.userName, user.password)); // --> add to Database
        res.send({ users: usersModel_1.users, success: true, message: "user added" });
    }
    catch (error) {
        console.error(error);
    }
};
//get all users controler
exports.getAllUsers = function (req, res) {
    try {
        res.send({ users: usersModel_1.users });
    }
    catch (error) {
        console.error(error);
    }
};
exports.logIn = function (req, res) {
    try {
        var user_1 = req.body;
        var userFound = usersModel_1.users.find(function (u) { return u.userName === user_1.userName && u.password === user_1.password; });
        if (userFound) {
            userFound.isLogIn = true; // --> update Database
            res.send({ success: true, message: "user found" });
        }
        else {
            res.send({ success: false, message: "user not found" });
        }
    }
    catch (error) {
        console.error(error);
    }
};
exports.getUserLogIn = function (req, res) {
    try {
        var userFound = usersModel_1.users.find(function (u) { return u.isLogIn === true; });
        if (userFound) {
            res.send({ success: true, message: "user found", user: userFound });
        }
        else {
            res.send({ success: false, message: "user not found" });
        }
    }
    catch (error) {
        console.error(error);
    }
};
