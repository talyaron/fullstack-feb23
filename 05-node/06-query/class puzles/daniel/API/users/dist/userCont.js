"use strict";
exports.__esModule = true;
exports.login = exports.registerUser = void 0;
var usersModel_1 = require("./usersModel");
function registerUser(req, res) {
    try {
        var _a = req.body, email_1 = _a.email, password = _a.password;
        if (!email_1 || !password)
            throw new Error("Please complete all fields");
        var user = new usersModel_1.User({ email: email_1, password: password });
        // Check if the user exsists
        var userExist = usersModel_1.users.find(function (user) { return user.email === email_1; });
        if (userExist)
            throw new Error("User already exist or not");
        usersModel_1.users.push(user);
        res.send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.meassage });
    }
}
exports.registerUser = registerUser;
function login(req, res) {
    try {
        var _a = req.body, email_2 = _a.email, password_1 = _a.password;
        if (!email_2 || !password_1)
            throw new Error("Please complete all fileds");
        // to check if the user exist and the password in correct
        var user = usersModel_1.users.find(function (user) { return user.email === email_2 && user.password === password_1; });
        if (!user)
            throw new Error("Some details are incorrect");
        res.send({ ok: true, email: user.email });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.meassage });
    }
}
exports.login = login;
