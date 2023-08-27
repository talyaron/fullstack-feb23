"use strict";
//usersCont.ts  
exports.__esModule = true;
exports.addUser = exports.getUsers = void 0;
var usersModel_1 = require("./usersModel");
exports.getUsers = function (req, res) {
    try {
        res.send({ users: usersModel_1.users });
    }
    catch (error) {
        console.error(error.massage);
    }
};
exports.addUser = function (req, res) {
    try {
        var user = req.body;
        usersModel_1.users.push(new usersModel_1.User(user.userName, user.password));
        res.send({ users: usersModel_1.users });
    }
    catch (error) {
        console.error(error.massage);
    }
};
