"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
//static files
app.use(express_1.default.static('public'));
const myUser = "Daniel";
//routes to get data from server
app.get('/user', (req, res) => {
    console.log('request to user');
    res.send({ user: myUser });
});
app.get('/age', (req, res) => {
    console.log('request to age');
    res.send({ age: "21" });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
