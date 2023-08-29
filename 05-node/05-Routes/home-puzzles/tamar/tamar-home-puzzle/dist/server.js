"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3002;
//static files
//app.use(express.static("public"))  //not yet created
//body
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
//routers:
//get router from taskRouter:
//get:
const tasksRouter_1 = __importDefault(require("./API/tasks/tasksRouter"));
//tells express to use this route on the initial rout "/API/tasks"
app.use("/API/tasks", tasksRouter_1.default);
//get router from userRouter:
const usersRouter_1 = __importDefault(require("./API/users/usersRouter"));
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", usersRouter_1.default);
app.listen(port, () => {
    console.log(`app listening on pors ${port}`);
});
