"use strict";
exports.__esModule = true;
exports.checkAdmin = exports.signIn = exports.checkUser = exports.addUser = void 0;
var model_1 = require("./model");
exports.addUser = function (req, res) {
    try {
        var _a = req.body, email_1 = _a.email, password = _a.password;
        if (!email_1 || !password)
            throw new Error("some of the details are missing");
        var userExists = model_1.users.find(function (user) { return user.email === email_1; });
        if (userExists)
            res.send({ message: "user exist" });
        var user = new model_1.User(email_1, password);
        model_1.users.push(user);
        res.send({ message: "User added successfully", email: email_1 });
        // res.send({ email: email });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};
exports.checkUser = function (req, res) {
    try {
        var email_2 = req.body.email;
        console.log(email_2);
        if (!email_2)
            throw new Error("email is missing");
        var userExists = model_1.users.find(function (user) { return user.email === email_2; });
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
        var _a = req.body, email_3 = _a.email, password_1 = _a.password;
        if (!email_3 || !password_1)
            throw new Error("email or password is missing");
        var correctUser = model_1.users.find(function (user) { return user.email === email_3 && user.password === password_1; });
        console.log(correctUser);
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
function checkAdmin(req, res) {
    try {
        var email_4 = req.body.email;
        console.log(email_4);
        debugger;
        if (!email_4)
            throw new Error("email not provided");
        var isAdmin = model_1.users.filter(function (user) {
            user.email === email_4 && user.admin === true;
        });
        console.log(isAdmin);
        console.log("test");
        if (!isAdmin) {
            res.send({ message: "user is not admin" });
        }
        else {
            var html = model_1.users
                .map(function (user) {
                "<option value=\"" + user.email + "\">" + user.email + "</option>";
            })
                .join(" ");
            var htmlToREnder = "<label for=\"admin-list\">To switch users use this:</label>\n<select name=\"admin-list\" id=\"admin-list\"><option value disabled selected>All users</option>" + html + "</select>";
            console.log(html);
            res.send({ message: "user is admin", html: htmlToREnder });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}
exports.checkAdmin = checkAdmin;
