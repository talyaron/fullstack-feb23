"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3008;
// Static files
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
// // // router to tasks
// // import tasksRouter from "./API/tasks/tasksRouter";
// // // tells express to use tasksRouter on the initial route "/API/tasks"
// // app.use("/API/tasks", tasksRouter)
const imgRouter_1 = __importDefault(require("./API/img/imgRouter"));
app.use("/API/img", imgRouter_1.default);
const usersRouter_1 = __importDefault(require("./API/users/usersRouter"));
app.use("/API/users", usersRouter_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
