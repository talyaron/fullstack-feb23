"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
//static files
app.use(express_1.default.static("public"));
//body
app.use(express_1.default.json());
//router to users
// get router from usersRouter
const usersRouters_1 = __importDefault(require("./API/users/usersRouters"));
//tells express to use proudctsRouter on the intial route "/API/users"
app.use("/API/users", usersRouters_1.default);
// get router from tasksRouter
const tasksRouters_1 = __importDefault(require("./API/tasks/tasksRouters"));
//tells express to use proudctsRouter on the intial route "/API/users"
app.use("/API/tasks", tasksRouters_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
