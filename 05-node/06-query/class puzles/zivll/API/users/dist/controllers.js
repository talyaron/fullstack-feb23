"use strict";
exports.__esModule = true;
exports.signIn = exports.checkUser = exports.addUser = void 0;
var model_1 = require("./model");
exports.addUser = function (req, res) {
    try {
        var _a = req.body, email = _a.email, password = _a.password;
        if (!email || !password)
            throw new Error("some of the details are missing");
        var user = new model_1.User(email, password);
        model_1.users.push(user);
        res.send({ message: "User added successfully", email: email });
        // res.send({ email: email });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};
exports.checkUser = function (req, res) {
    try {
        var email_1 = req.body.email;
        console.log(email_1);
        if (!email_1)
            throw new Error("email is missing");
        var userExists = model_1.users.find(function (user) { return user.email === email_1; });
        console.log(userExists);
        if (userExists)
            res.send({ message: "user exist" });
        if (!userExists || userExists === undefined)
            res.send({ message: "user does not exist" });
        // res.send({ email: email });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};
function signIn(req, res) {
    try {
        var _a = req.body, email_2 = _a.email, password_1 = _a.password;
        if (!email_2 || !password_1)
            throw new Error("email or password is missing");
        var correctUser = model_1.users.find(function (user) { return user.email === email_2 && user.password === password_1; });
        if (!correctUser)
            throw new Error("email or password are incorrect");
        res.send({ message: "success", email: correctUser.email });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}
exports.signIn = signIn;
