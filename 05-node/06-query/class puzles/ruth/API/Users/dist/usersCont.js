"use strict";
exports.__esModule = true;
exports.register = exports.login = void 0;
var console_1 = require("console");
var usersModel_1 = require("./usersModel");
exports.login = function (req, res) {
    try {
        var _a = req.body, email_1 = _a.email, password_1 = _a.password;
        if (!email_1 || !password_1)
            throw new Error("some of the parameters not valid");
        var user = usersModel_1.users.find(function (user) { return user.email === email_1 && user.password === password_1; });
        if (!user)
            throw new Error("Incorrect email or password");
        res.send({ user: user, ok: true });
        console_1.log(user.email + " ! ! ! -- LOGIN SUCCESSFUL ! ! !");
    }
    catch (error) {
        console.error(error.message);
    }
};
exports.register = function (req, res) {
    try {
        var _a = req.body, email_2 = _a.email, password = _a.password;
        if (!email_2 || !password)
            throw new Error("invalid email or password");
        if (usersModel_1.users.find(function (user) { return user.email === email_2; }))
            throw new Error("this email already used");
        var newUser = new usersModel_1.User({ email: email_2, password: password });
        usersModel_1.users.push(newUser);
        res.send({ success: true });
        console_1.log(newUser.email + " ! ! ! -- REGISTER SUCCESSFUL -- ! ! !");
    }
    catch (error) {
        console.log(usersModel_1.users);
        console.error(error.message);
    }
};
