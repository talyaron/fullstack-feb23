"use strict";
exports.__esModule = true;
var express_1 = require("express");
var noteCont_1 = require("./noteCont");
var router = express_1["default"].Router();
router
    .get('/get-notes', noteCont_1.getNotes)
    .post('/add-note', noteCont_1.addNote)["delete"]("/delete-note", noteCont_1.deleteNote)
    .patch('/update-note-description', noteCont_1.updateNote)
    .patch('/update-note-status', noteCont_1.updateNoteStatus);
exports["default"] = router;
