"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasksControllers_1 = require("./tasksControllers");
const routes = express_1.default.Router();
routes
    .get("/get-tasks", tasksControllers_1.getTasks)
    .post("/add-tasks", tasksControllers_1.addTasks)
    .delete("/delete-tasks", tasksControllers_1.deleteTasks)
    .patch("/update-tasks", tasksControllers_1.updateTasks);
exports.default = routes;
//# sourceMappingURL=tasksRouter.js.map