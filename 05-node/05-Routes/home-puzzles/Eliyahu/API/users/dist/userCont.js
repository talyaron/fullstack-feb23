"use strict";
exports.__esModule = true;
exports.getUserName = exports.login = exports.registerUser = void 0;
var userModels_1 = require("./userModels");
exports.registerUser = function (req, res) {
    try {
        var _a = req.body, name = _a.name, email_1 = _a.email, password = _a.password;
        if (!email_1 || !password || !name)
            throw new Error("Please complete all fields");
        var user = new userModels_1.User(name, email_1, password);
        var userExist = userModels_1.users.find(function (user) { return user.email === email_1; });
        if (userExist) {
            throw new Error("This email address already exist");
        }
        userModels_1.users.push(user);
        res.send({ ok: true });
    }
    catch (error) {
        console.error(error.message);
    }
};
exports.login = function (req, res) {
    try {
        var _a = req.body, email_2 = _a.email, password_1 = _a.password;
        if (!email_2 || !password_1)
            throw new Error("Please complete all fields");
        var user = userModels_1.users.find(function (user) { return user.email === email_2 && user.password === password_1; });
        if (!user)
            throw new Error("Some of details are incorrect");
        res.send({ ok: true, email: user.email });
    }
    catch (error) {
        console.error(error.message);
    }
};
exports.getUserName = function (req, res) {
    try {
        var emailUser_1 = req.body.emailUser;
        if (!emailUser_1)
            throw new Error("Please complete all fields");
        var user = userModels_1.users.find(function (user) { return user.email === emailUser_1; });
        if (!user)
            throw new Error("Some of details are incorrect");
        res.send({ ok: true, userName: user.name });
    }
    catch (error) {
        console.error(error.massage);
    }
};
