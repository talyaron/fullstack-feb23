"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3006;
// static files 
app.use(express_1.default.static('public'));
app.use(express_1.default.json()); // I need to add this if I want to get the (body: JSON.stringify(friend) //the req) 
// router to tasks
const tasksRouter_1 = __importDefault(require("./API/tasks/tasksRouter"));
// tells express to use tasksRouter on the initial route "/API/tasks"
app.use("/API/tasks", tasksRouter_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
