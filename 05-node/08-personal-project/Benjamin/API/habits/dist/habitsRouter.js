"use strict";
exports.__esModule = true;
var express_1 = require("express");
var habitsCont_1 = require("./habitsCont");
var habitsRouter = express_1["default"].Router();
habitsRouter.post("/add-new-habit", habitsCont_1.addNewHabit).get("/get-user-habits", habitsCont_1.getUserHabits);
exports["default"] = habitsRouter;
