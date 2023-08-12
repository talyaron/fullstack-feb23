"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.static('public'));
const myName = "Nella";
app.get('/name', (req, res) => {
    console.log('request to name');
    res.send({ name: myName });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
