"use strict";
exports.__esModule = true;
exports.updateUser = exports.deleteUser = exports.getUsers = exports.addUser = void 0;
var userModel_1 = require("./userModel");
var users = [
    new userModel_1.User({ name: "test", phoneNum: "052-5381648", imgUrl: "bla" })
];
//add user controler
exports.addUser = function (req, res) {
    var user = req.body;
    console.log(user);
    //add to users array
    users.push(new userModel_1.User(user)); // --> add to Database
    console.log(users);
    res.send({ user: user });
};
//get users
exports.getUsers = function (req, res) {
    try {
        res.send({ users: users });
    }
    catch (error) {
        console.error(error);
    }
};
exports.deleteUser = function (req, res) {
    try {
        var id_1 = req.body.id;
        console.log(id_1);
        if (!id_1)
            throw new Error("there is no id");
        users = users.filter(function (user) { return user.id !== id_1; }); //delete from the array
        res.send({ users: users });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
exports.updateUser = function (req, res) {
    try {
        var _a = req.body, phoneNum = _a.phoneNum, id_2 = _a.id;
        console.log(req.body);
        if (!phoneNum || !id_2)
            throw new Error("Please complete all fields");
        var user = users.find(function (user) { return user.id === id_2; });
        if (!user)
            throw new Error("user not found");
        user.phoneNum = phoneNum;
        res.send({ users: users });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
