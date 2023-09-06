"use strict";
exports.__esModule = true;
exports.HabitModelDB = exports.HabitSchema = void 0;
var mongoose_1 = require("mongoose");
// enum Categorie{
//     health,
//     focus,
//     learn,
//     fun
// }
// enum Time{
//     morning,
//     afternoon,
//     evening
// }
exports.HabitSchema = new mongoose_1.Schema({
    name: String,
    categorie: String,
    time: String,
    status: String
});
exports.HabitModelDB = mongoose_1.model("habits", exports.HabitSchema);
