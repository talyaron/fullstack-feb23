"use strict";
exports.__esModule = true;
exports.updateUser = exports.getTasksByUser = exports.addUser = exports.login = void 0;
var usersModel_1 = require("./usersModel");
var usersTasks = [];
exports.login = function (req, res) {
    try {
        var _a = req.body, email_1 = _a.email, password_1 = _a.password;
        if (!email_1 || !password_1)
            throw new Error("Please complete all fields");
        var userTasks = usersTasks.find(function (userTasks) {
            return userTasks.user.email === email_1 && userTasks.user.password === password_1;
        });
        if (!userTasks)
            throw new Error("Some of the details are incorrect");
        res.send({ success: true, email: userTasks.user.email });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
};
exports.addUser = function (req, res) {
    try {
        console.log("email, password"); //+
        var _a = req.body, email_2 = _a.email, password = _a.password;
        console.log(email_2, password); //+
        console.log(usersTasks);
        if (!email_2 || !password) {
            res.send({
                usersTasks: usersTasks,
                success: false,
                message: "user name and password are required"
            });
            return;
        }
        var userTasks = usersTasks.find(function (userTasks) { return userTasks.user.email === email_2; });
        if (userTasks) {
            res.send({
                usersTasks: usersTasks,
                success: false,
                message: "user name is already exist"
            });
            return;
        }
        usersTasks.push(new usersModel_1.UserTasks(new usersModel_1.User(email_2, password)));
        res.send({ usersTasks: usersTasks, success: true, message: "user added" });
    }
    catch (error) { }
};
exports.getTasksByUser = function (req, res) {
    var userMail = req.body.userMail;
    var userTasks = usersTasks.find(function (user) { return user.user.email === userMail; });
    var tasksArray = userTasks.tasks;
    res.send({ tasksArray: tasksArray });
};
exports.updateUser = function (req, res) { };
