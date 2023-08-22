"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
// const slogan = "The easiest way for vets!"
// let name = ""
const friends = [];
app.post('/API/add-friend', (req, res) => {
    const friend = req.body;
    console.log(friend);
    res.send({ friend });
});
// app.get('/slogan', (req, res) => {
//   console.log('request to slogan')
//   res.send({ slogan: slogan })
// });
// app.get('/name', (req, res) => {
//   console.log('request to name')
//   res.send({ name: name })
// });
// app.post('/name', (req, res) => {
//   console.log('received name:', req.body.name)
//   name = req.body.name
//   res.send({ name: name })
// })
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
