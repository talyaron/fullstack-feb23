"use strict";
//Taking the model from the model file
exports.__esModule = true;
exports.updatEexercise = exports.deleteExercise = exports.addExercise = exports.getExercises = void 0;
var model_1 = require("./model");
var exercises = [new model_1.Exercise({ exercise: "testefdnd" }, 3, 10, 10, 60), new model_1.Exercise({ exercise: "testefdnd" }, 3, 10, 10, 60)];
exports.getExercises = function (req, res) {
    try {
        res.send({ exercises: exercises });
    }
    catch (error) {
        console.error(error.message);
    }
};
exports.addExercise = function (req, res) {
    try {
        var exercise = req.body;
        exercises.push(new model_1.Exercise(exercise));
        res.send({ exercises: exercises });
    }
    catch (error) {
        console.error(error.message);
    }
};
exports.deleteExercise = function (req, res) {
    try {
        var id_1 = req.body.id;
        exercises = exercises.filter(function (exercise) { return exercise.id !== id_1; });
        res.send({ exercises: exercises });
    }
    catch (error) {
        console.error(error.message);
    }
};
exports.updatEexercise = function (req, res) {
    try {
        var _a = req.body, exercise = _a.exercise, sets = _a.sets, repetitions = _a.repetitions, weight = _a.weight, timer = _a.timer, id_2 = _a.id;
        console.log(req.body);
        if (!exercise || !sets || !repetitions || !weight || !timer || !id_2)
            throw new Error("Please complete all fields");
        var _exercise = exercises.find(function (exercise) { return exercise.id === id_2; });
        if (!_exercise)
            throw new Error("exercise not found");
        _exercise.exercise = exercise;
        _exercise.sets = sets;
        _exercise.repetitions = repetitions;
        _exercise.weight = weight;
        _exercise.timer = timer;
        res.send({ exercises: exercises });
    }
    catch (error) {
        console.error(error);
        res.send({ error: error });
    }
};
