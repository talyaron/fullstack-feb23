"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 4500;
app.use(express_1.default.static('public'));
//app.use(express.json());
const myName = "shiran";
app.get('/name', (req, res) => {
    console.log("get request to /name");
    res.send({ name: myName });
});
const users = [
    { username: 'shiran', password: '123456' },
    { username: 'ohad', password: '123456' },
    { username: 'ran', password: '123456' },
    { username: 'guy', password: '123456' }
    // Add more users here
];
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.send({ success: true });
    }
    else {
        res.send({ success: false });
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
