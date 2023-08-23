"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
//static files
app.use(express_1.default.static('public'));
const header = "Pepito";
//routes to get data from server
app.get('/title', (req, res) => {
    console.log('request to title');
    res.send({ title: header });
});
const desc = "lorem Ipsum";
//routes to get data from server
app.get('/info', (req, res) => {
    console.log('request to info');
    res.send({ info: desc });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
app.use(sassMiddleware({
    src: path.join(__dirname, 'src', 'scss'),
    dest: path.join(__dirname, 'public', 'css'),
    debug: true,
    outputStyle: 'expanded',
}));
app.use(express_1.default.static(path.join(__dirname, 'public')));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// // Import the express in typescript file
// import express from 'express';
// // Initialize the express engine
// const app: express.Application = express();
// // Take a port 3000 for running server.
// const port: number = 3000;
// // Handling '/' Request
// app.get('/', (_req, _res) => {
// 	_res.send("TypeScript With Express");
// });
// // Server setup
// app.listen(port, () => {
// 	console.log(`TypeScript with Express
// 		http://localhost:${port}/`);
// });
