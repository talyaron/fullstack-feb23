"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cont_1 = require("./cont");
var router = express_1["default"].Router();
router
    .get('/get-exercises', cont_1.getExercises)
    .post("/add-exercise", cont_1.addExercise)["delete"]("/delete-exercise", cont_1.deleteExercise)
    .patch('/update-exercise', cont_1.updatEexercise);
exports["default"] = router;
