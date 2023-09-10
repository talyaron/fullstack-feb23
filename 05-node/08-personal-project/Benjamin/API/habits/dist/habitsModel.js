"use strict";
exports.__esModule = true;
exports.DoneHabitModelDB = exports.doneHabitsShema = exports.HabitModelDB = exports.HabitSchema = void 0;
var mongoose_1 = require("mongoose");
// DB models
exports.HabitSchema = new mongoose_1.Schema({
    name: String,
    categorie: String,
    time: String,
    status: String,
    email: String,
    createdAt: {
        type: Date,
        immutable: true,
        "default": function () { return Date.now(); }
    }
});
exports.HabitModelDB = mongoose_1.model("habits", exports.HabitSchema);
exports.doneHabitsShema = new mongoose_1.Schema({
    name: String,
    categorie: String,
    email: String,
    timeDone: {
        type: Date,
        immutable: true,
        "default": function () { return Date.now(); }
    }
});
exports.DoneHabitModelDB = mongoose_1.model("DoneHabits", exports.doneHabitsShema);
