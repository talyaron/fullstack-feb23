"use strict";
exports.__esModule = true;
exports.HabitModelDB = exports.HabitSchema = void 0;
var mongoose_1 = require("mongoose");
// DB models
exports.HabitSchema = new mongoose_1.Schema({
    name: String,
    categorie: String,
    time: String,
    status: String,
    email: String
});
exports.HabitModelDB = mongoose_1.model("habits", exports.HabitSchema);
