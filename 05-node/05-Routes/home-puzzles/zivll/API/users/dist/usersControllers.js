"use strict";
exports.__esModule = true;
exports.signIn = exports.addUser = void 0;
var usersModel_1 = require("./usersModel");
exports.addUser = function (req, res) {
    try {
        var _a = req.body, email_1 = _a.email, password = _a.password;
        if (!email_1 || !password)
            throw new Error("email or password is missing");
        var newUser = new usersModel_1.User(email_1, password);
        var userExists = usersModel_1.users.find(function (user) { return user.email === email_1; });
        if (userExists)
            throw new Error("User already exists");
        usersModel_1.users.push(newUser);
        res.send({ message: "user added succsesfully" });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
};
function signIn(req, res) {
    try {
        var _a = req.body, email_2 = _a.email, password_1 = _a.password;
        if (!email_2 || !password_1)
            throw new Error("email or password is missing");
        var correctUser = usersModel_1.users.find(function (user) { return user.email === email_2 && user.password === password_1; });
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
