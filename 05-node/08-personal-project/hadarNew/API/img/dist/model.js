"use strict";
exports.__esModule = true;
exports.Exercise = void 0;
var Exercise = /** @class */ (function () {
    function Exercise(_a, sets, repetitions, weight, timer) {
        var exercise = _a.exercise;
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
