"use strict";
// import { multi } from "./cont/helpers"
// console.log("hi, I'm a server")
// console.log(multi(10, 6))
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// const port = 3001;
app.use(express_1.default.static('public'));
app.listen(3001, () => {
    console.log("Listen on the port 3001...");
});
