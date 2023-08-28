"use strict";
exports.__esModule = true;
exports.getUserDetails = exports.login = exports.getAllUsers = exports.addUser = void 0;
var usersModel_1 = require("./usersModel");
//add user controler    
exports.addUser = function (req, res) {
    try {
        var user = req.body;
        if (!user.userName || !user.password) {
            res.send({ users: usersModel_1.users, success: false, message: "user name and password are required" });
            return;
        }
        //add to users array
        usersModel_1.users.push(new usersModel_1.User(user.userName, user.password)); // --> add to Database
        res.send({ users: usersModel_1.users, success: true, message: "user added" });
    }
    catch (error) {
        console.error(error);
    }
};
//get all users controler
exports.getAllUsers = function (req, res) {
    try {
        res.send({ users: usersModel_1.users });
    }
    catch (error) {
        console.error(error);
    }
};
//log in controler
exports.login = function (req, res) {
    try {
        var _a = req.body, userName_1 = _a.userName, password_1 = _a.password;
        if (!userName_1 || !password_1)
            throw new Error("Please complete all fields");
        //check if user exist and password is correct
        var user = usersModel_1.users.find(function (user) { return user.userName === userName_1 && user.password === password_1; });
        if (!user)
            throw new Error("some of the details are incorrect");
        res.send({ ok: true, userName: user.userName });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
};
// Function to get user details by username
exports.getUserDetails = function (req, res) {
    try {
        var userName_2 = req.query.userName;
        if (!userName_2) {
            res.status(400).send("Username is required.");
            return;
        }
        var user = usersModel_1.users.find(function (user) { return user.userName === userName_2; });
        if (!user) {
            res.status(404).send("User not found.");
            return;
        }
        // Send the user details as a JSON response
        res.send(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};
