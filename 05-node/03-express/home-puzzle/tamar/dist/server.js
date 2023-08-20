"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser")); //import bodyParser
const app = express_1.default();
app.use(body_parser_1.default.json()); //use bodyParser middleware
const port = process.env.PORT || 3000;
//static files
app.use(express_1.default.static('public'));
let mytitle = "Tamar's Site is Here";
//routes to get data from server
app.get('/title', (req, res) => {
    console.log('request to title');
    res.send({ title: mytitle });
});
app.get('/description', (req, res) => {
    console.log('request to description');
    res.send({ description: "this site is to test my new server" });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//route to get data from user and sent it to server
app.post('/updateTitle', (req, res) => {
    console.log('request to update title');
    const newTitle = req.body.title;
    mytitle = newTitle;
    res.send({ message: 'Title updated successfully' });
});
