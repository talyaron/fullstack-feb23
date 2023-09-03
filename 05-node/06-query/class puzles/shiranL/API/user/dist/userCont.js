"use strict";
exports.__esModule = true;
exports.getLogInUser = exports.logIn = exports.addUser = void 0;
var userModel_1 = require("./userModel");
function addUser(req, res) {
    try {
        var user_1 = new userModel_1.User(req.body.email, req.body.password);
        if (!user_1.email || !user_1.password)
            throw new Error("missing some details");
        // chack if user exist
        var existUser = userModel_1.users.find(function (u) { return u.email === user_1.email; });
        if (existUser)
            throw new Error("user already exist");
        //add user
        userModel_1.users.push(user_1);
        res.send(userModel_1.users);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}
exports.addUser = addUser;
function logIn(req, res) {
    try {
        var user_2 = new userModel_1.User(req.body.email, req.body.password);
        if (!user_2.email || !user_2.password)
            throw new Error("missing some details");
        // chack if user exist
        var existUser = userModel_1.users.find(function (u) { return u.email === user_2.email; });
        if (!existUser)
            throw new Error("user not exist");
        //chack password
        if (existUser.password !== user_2.password)
            throw new Error("password not match");
        // make all users log out
        userModel_1.users.forEach(function (u) { return u.isLogIn = false; });
        //log in
        existUser.isLogIn = true;
        res.send({ ok: true, user: existUser });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error.message);
        res.send({ ok: false, message: error.message });
    }
}
exports.logIn = logIn;
function getLogInUser(req, res) {
    try {
        var logInUser = userModel_1.users.find(function (u) { return u.isLogIn; });
        if (!logInUser)
            throw new Error("no user is log in");
        res.send({ ok: true, logInUser: logInUser });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}
exports.getLogInUser = getLogInUser;
