"use strict";
exports.__esModule = true;
exports.Exercise = void 0;
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
