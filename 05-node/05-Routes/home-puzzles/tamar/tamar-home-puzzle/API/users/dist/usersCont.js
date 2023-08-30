"use strict";
exports.__esModule = true;
exports.deleteUser = exports.updateUser = exports.getUser = exports.login = exports.registerUser = void 0;
var usersModel_1 = require("./usersModel");
//the controllers:
//register user 
exports.registerUser = function (req, res) {
    try {
        var _a = req.body, name_1 = _a.name, password_1 = _a.password;
        console.log(name_1, password_1);
        if (!name_1 || !password_1)
            throw new Error("Please complete all fields");
        var user = new usersModel_1.User({ name: name_1, password: password_1 });
        //check if user already exist
        var userExist = usersModel_1.users.find(function (user) { return user.name === name_1 && user.password === password_1; });
        if (userExist)
            throw new Error("User already exist");
        usersModel_1.users.push(user);
        res.send({ ok: true });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
};
exports.login = function (req, res) {
    try {
        var _a = req.body, name_2 = _a.name, password_2 = _a.password;
        if (!name_2 || !password_2)
            throw new Error("Please complete all fields");
        //check if user exist and id is match
        var user = usersModel_1.users.find(function (user) { return user.name === name_2 && user.password === password_2; });
        if (!user)
            throw new Error("some of the details are not match");
        res.send({ ok: true, name: user.name, id: user.id });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
};
//get user from server
exports.getUser = function (req, res) {
    try {
        var id_1 = req.body.id;
        console.log(id_1);
        var user = usersModel_1.users.find(function (user) { return user.id === id_1; });
        if (!user)
            throw new Error("no match User found");
        res.send({ user: user });
    }
    catch (error) {
        console.error(error);
    }
};
//update specific user
exports.updateUser = function (req, res) {
    try {
        var id_2 = req.body.id;
        console.log(id_2);
        var user = usersModel_1.users.find(function (user) { return user.id === id_2; });
        if (!user)
            throw new Error("no match User found"); //**need to be fill*/
        res.send({ users: usersModel_1.users }); //server send the updated array to client
    }
    catch (error) {
        console.error(error);
    }
};
//delete specific user
exports.deleteUser = function (req, res) {
    try {
        var id_3 = req.body.id;
        console.log(id_3);
        var newUsers = usersModel_1.users.filter(function (user) { return user.id !== id_3; });
        res.send({ newUsers: newUsers });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
