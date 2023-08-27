"use strict";
exports.__esModule = true;
exports.updateNoteStatus = exports.updateNote = exports.deleteNote = exports.getNotes = exports.addNote = void 0;
var usersCont_1 = require("../users/usersCont");
var notes = [
// new user("Google", "054-1234567", 100, [])
];
//add note controler
exports.addNote = function (req, res) {
    try {
        var _a = req.body, title = _a.title, description = _a.description, status = _a.status, id_1 = _a.id;
        if (!title || !description || !status || !id_1)
            throw new Error("Please complete all fields");
        //add to users array
        var user = usersCont_1.users.find(function (user) { return user.id === id_1; });
        if (!user)
            throw new Error("user not found");
        console.log(user);
        var note = { title: title, description: description, status: status };
        user.noteList.push(note); // --> add to Database
        var list = user.noteList;
        console.log(list);
        res.send({ list: list });
    }
    catch (error) {
        console.error(error);
    }
};
//get users
exports.getNotes = function (req, res) {
    try {
        var id_2 = req.query.id;
        if (!id_2)
            throw new Error("Please complete all fields");
        console.log(usersCont_1.users);
        var user = usersCont_1.users.find(function (user) { return user.id === id_2; });
        if (!user)
            throw new Error("user not found");
        var notes_1 = user.noteList;
        console.log(notes_1);
        debugger;
        res.send({ notes: notes_1 });
    }
    catch (error) {
        console.error(error);
    }
};
exports.deleteNote = function (req, res) {
    try {
        var _a = req.body, title_1 = _a.title, id_3 = _a.id;
        if (!id_3 || !title_1)
            throw new Error("Please complete all fields");
        console.log(id_3);
        var user = usersCont_1.users.find(function (user) { return user.id === id_3; });
        if (!user)
            throw new Error("user not found");
        var indx = user.noteList.findIndex(function (note) { return note.title === title_1; });
        if (indx === -1)
            throw new Error("note not found");
        user.noteList.splice(indx, 1);
        var list = user.noteList;
        res.send({ list: list });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
exports.updateNote = function (req, res) {
    try {
        var _a = req.body, title_2 = _a.title, newDescription = _a.newDescription, id_4 = _a.id;
        console.log(req.body);
        if (!id_4 || !title_2 || !newDescription)
            throw new Error("Please complete all fields");
        console.log(usersCont_1.users);
        var user = usersCont_1.users.find(function (user) { return user.id === id_4; });
        if (!user)
            throw new Error("user not found");
        var indx = user.noteList.findIndex(function (note) { return note.title === title_2; });
        if (indx === -1)
            throw new Error("note not found");
        user.noteList[indx].description = newDescription;
        var list = user.noteList;
        res.send({ list: list });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
};
exports.updateNoteStatus = function (req, res) {
    try {
        var _a = req.body, title_3 = _a.title, newStatus = _a.newStatus, id_5 = _a.id;
        console.log(req.body);
        if (!id_5 || !title_3 || !newStatus)
            throw new Error("Please complete all fields");
        var user = usersCont_1.users.find(function (user) { return user.id === id_5; });
        if (!user)
            throw new Error("user not found");
        var indx = user.noteList.findIndex(function (note) { return note.title === title_3; });
        if (indx === -1)
            throw new Error("note not found");
        user.noteList[indx].status = newStatus;
        var list = user.noteList;
        res.send({ list: list });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
};
