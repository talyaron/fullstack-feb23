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
//class Task {title: string, description: string, status: string, id: : string}
const tasksRouter_1 = __importDefault(require("./API/Tasks/tasksRouter"));
app.use("API/tasks", tasksRouter_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
