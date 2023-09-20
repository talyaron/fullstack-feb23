"use strict";
exports.__esModule = true;
exports.updatePhoneNumber = exports.updateEmail = exports.updatePassword = exports.deleteuser = exports.getusers = exports.adduser = exports.users = void 0;
var usersModel_1 = require("./usersModel");
exports.users = [
    new usersModel_1.User("liran", "123456", "054-1234567", "liran@sanolla.com")
];
//add user controler
exports.adduser = function (req, res) {
    try {
        debugger;
        var user = req.body;
        console.log(user);
        //add to users array
        exports.users.push(new usersModel_1.User(user.userName, user.password, user.phoneNumber, user.email)); // --> add to Database
        console.log(exports.users);
        res.send({ user: user });
    }
    catch (error) {
        console.error(error);
    }
};
//get users
exports.getusers = function (req, res) {
    try {
        res.send({ users: exports.users });
    }
    catch (error) {
        console.error(error);
    }
};
exports.deleteuser = function (req, res) {
    try {
        var id_1 = req.body.id;
        console.log(id_1);
        exports.users = exports.users.filter(function (user) { return user.id !== id_1; });
        res.send({ users: exports.users });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
exports.updatePassword = function (req, res) {
    try {
        var _a = req.body, password = _a.password, id_2 = _a.id;
        console.log(req.body);
        if (!id_2)
            throw new Error("Please complete all fields");
        console.log(exports.users);
        var user = exports.users.find(function (user) { return user.id === id_2; });
        if (!user)
            throw new Error("user not found");
        user.password = password;
        res.send({ users: exports.users });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
};
exports.updateEmail = function (req, res) {
    try {
        var _a = req.body, email = _a.email, id_3 = _a.id;
        console.log(req.body);
        if (!id_3)
            throw new Error("Please complete all fields");
        console.log(exports.users);
        var user = exports.users.find(function (user) { return user.id === id_3; });
        if (!user)
            throw new Error("user not found");
        user.email = email;
        res.send({ users: exports.users });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
};
exports.updatePhoneNumber = function (req, res) {
    try {
        var _a = req.body, phoneNumber = _a.phoneNumber, id_4 = _a.id;
        console.log(req.body);
        if (!id_4)
            throw new Error("Please complete all fields");
        console.log(exports.users);
        var user = exports.users.find(function (user) { return user.id === id_4; });
        if (!user)
            throw new Error("user not found");
        user.phoneNumber = phoneNumber;
        res.send({ users: exports.users });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
};
