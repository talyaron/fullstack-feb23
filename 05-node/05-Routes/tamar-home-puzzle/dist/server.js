"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
//static files
//app.use(express.static("public"))  //not yet created
//body
app.use(express_1.default.json());
//routers:
//to task:
//get:
const tasksRouter_1 = __importDefault(require("./API/tasks/tasksRouter"));
//tells express to use this route on the initial rout "/API/tasks"
app.use("/API/tasks", tasksRouter_1.default);