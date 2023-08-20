"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
const myName = "Ziv";
let titleH1 = `Hello world! my name is ${myName}`;
let desctiption = `This is my first project`;
app.use(express_1.default.static("public"));
app.get("/dinamicTitle", (req, res) => res.send({ title: titleH1 }));
console.log(`title request`);
app.get("/dinamicDescription", (req, res) => res.send({ description: desctiption }));
app.post("/", (req, res) => res.send({ description: req.body.changingTitle }));
console.log(`hey there!`);
app.listen(port, () => console.log(`Server is running on port ${port}`));
