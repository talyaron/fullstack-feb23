"use strict";
exports.__esModule = true;
exports.getUserRelatives = exports.updateRelation = exports.deleteRelative = exports.addRelative = exports.getRelatives = void 0;
var userModel_1 = require("../users/userModel");
var relativesModel_1 = require("./relativesModel");
function getRelatives(req, res) {
    try {
        res.send({ relatives: relativesModel_1.relatives });
    }
    catch (error) {
        console.error(error);
    }
}
exports.getRelatives = getRelatives;
function addRelative(req, res) {
    try {
        var _a = req.body, fullName = _a.fullName, country = _a.country, email_1 = _a.email;
        console.log({ fullName: fullName, country: country, email: email_1 });
        if (!fullName || !country)
            throw new Error("Please complete all fields");
        if (!email_1)
            throw new Error("no email");
        var newRelative = new relativesModel_1.Relative(fullName, country, relativesModel_1.Relation.choose);
        relativesModel_1.relatives.push(newRelative);
        //find user
        var user = userModel_1.users.find(function (user) { return user.email === email_1; });
        if (!user)
            throw new Error("user not found");
        userRelatives_1.push(new userRelatives_1(user, newRelative));
        console.log(userRelatives_1);
        var userRelatives_1 = userRelatives_1.filter(function (userrelative) { return userrelative.user.email === email_1; });
        var _relatives = _userRelatives.map(function (userrelative) { return userrelative.relative; }); //returns only relatives of user
        res.send({ relatives: _relatives });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}
exports.addRelative = addRelative;
function deleteRelative(req, res) {
    try {
        var id_1 = req.body.id;
        var index = relativesModel_1.relatives.findIndex(function (relative) { return relative.id === id_1; });
        if (index === -1) {
            throw new Error("relative not found");
        }
        relativesModel_1.relatives.splice(index, 1);
        res.send({ relatives: relativesModel_1.relatives });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}
exports.deleteRelative = deleteRelative;
function updateRelation(req, res) {
    try {
        var _a = req.body, id_2 = _a.id, relation = _a.relation;
        var index = relativesModel_1.relatives.findIndex(function (relative) { return relative.id === id_2; });
        if (index === -1) {
            throw new Error("relative not found");
        }
        // if (status !== relation.done && status !== TaskStatus.todo) {
        //     throw new Error("status not valid");
        // }
        relativesModel_1.relatives[index].changeRelation(relation);
        res.send({ relatives: relativesModel_1.relatives });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}
exports.updateRelation = updateRelation;
function getUserRelatives(req, res) {
    try {
        //get email from query
        var email_2 = req.query.email;
        if (!email_2) {
            throw new Error("email is required");
        }
        //get user relatives
        var _userrelatives = relativesModel_1.userRelatives.filter(function (userrelative) { return userrelative.user.email === email_2; });
        var _relatives = _userrelatives.map(function (userrelative) { return userrelative.user; }); //returns only relatives of user
        res.send({ relatives: _relatives });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
}
exports.getUserRelatives = getUserRelatives;
