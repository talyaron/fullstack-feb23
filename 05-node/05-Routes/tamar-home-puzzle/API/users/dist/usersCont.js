"use strict";
exports.__esModule = true;
exports.deleteUser = exports.updateUserTasks = exports.getUsers = exports.addUser = void 0;
var usersModel_1 = require("./usersModel");
var users = [
    new usersModel_1.User({ name: "Tamar" }),
    new usersModel_1.User({ name: "Amir" }),
    new usersModel_1.User({ name: "Sivan" }),
    new usersModel_1.User({ name: "Ofir" }),
    new usersModel_1.User({ name: "Eliya" })
];
//the controllers:
//add User to server
exports.addUser = function (req, res) {
    try {
        var user = req.body; //tack data from client
        console.log(user);
        if (!user)
            throw new Error("no req.body User found");
        users.push(new usersModel_1.User(user)); //server add the Userto users array
        console.log(users);
        res.send({ users: users }); //server send update array to client
    }
    catch (error) {
        console.error(error);
    }
};
//get all users from server
exports.getUsers = function (req, res) {
    try {
        res.send({ users: users });
    }
    catch (error) {
        console.error(error);
    }
};
//update specific user
exports.updateUserTasks = function (req, res) {
    try {
        var id_1 = req.body.id;
        console.log(id_1);
        var user = users.find(function (user) { return user.id === id_1; });
        if (!user)
            throw new Error("no match User found");
        user.tasks = //**need to be fill */
            res.send({ users: users }); //server send the updated array to client
    }
    catch (error) {
        console.error(error);
    }
};
//delete specific user
exports.deleteUser = function (req, res) {
    try {
        var id_2 = req.body.id;
        console.log(id_2);
        users = users.filter(function (user) { return user.id !== id_2; });
        res.send({ users: users });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
