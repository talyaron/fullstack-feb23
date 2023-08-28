"use strict";
exports.__esModule = true;
exports.deleteUser = exports.updateUser = exports.getUsers = exports.login = exports.registerUser = void 0;
var usersModel_1 = require("./usersModel");
//the controllers:
//register user 
exports.registerUser = function (req, res) {
    try {
        var name_1 = req.body.name;
        if (!name_1)
            throw new Error("Please complete all fields");
        var user = new usersModel_1.User({ name: name_1 });
        //check if user already exist
        var userExist = usersModel_1.users.find(function (user) { return user.name === name_1; });
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
        var _a = req.body, name_2 = _a.name, id_1 = _a.id;
        if (!name_2 || !id_1)
            throw new Error("Please complete all fields");
        //check if user exist and id is match
        var user = usersModel_1.users.find(function (user) { return user.name === name_2 && user.id === id_1; });
        if (!user)
            throw new Error("some of the details are not match");
        res.send({ ok: true, name: user.name });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
};
//get all users from server
exports.getUsers = function (req, res) {
    try {
        res.send({ users: usersModel_1.users });
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
        var users_1 = users_1.filter(function (user) { return user.id !== id_3; });
        res.send({ users: users_1 });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
