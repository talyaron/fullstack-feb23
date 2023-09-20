"use strict";
exports.__esModule = true;
exports.ExerciseModel = exports.ExerciseSchema = exports.Exercise = void 0;
var mongoose_1 = require("mongoose");
var Exercise = /** @class */ (function () {
    function Exercise(_a) {
        var exercise = _a.exercise, sets = _a.sets, repetitions = _a.repetitions, weight = _a.weight, timer = _a.timer;
        this.exercise = exercise;
        this.sets = sets;
        this.repetitions = repetitions;
        this.weight = weight;
        this.timer = timer;
        this.id = Math.random().toString();
    }
    return Exercise;
}());
exports.Exercise = Exercise;
//Schema
exports.ExerciseSchema = new mongoose_1.Schema({
    exercise: String,
    sets: Number,
    repetitions: Number,
    weight: Number,
    timer: Number
});
//Model
exports.ExerciseModel = mongoose_1.model("exersices", exports.ExerciseSchema);
