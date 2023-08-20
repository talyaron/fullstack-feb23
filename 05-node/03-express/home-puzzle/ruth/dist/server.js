"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.static('public'));
app.use(express_1.default.json()); // Parse JSON request bodies
const name = "ruth";
const descriptions = "hi there and thanks for getting here";
const nameFromUser = "";
app.get('/name', (req, res) => {
    res.send({ name });
});
app.get('/descriptions', (req, res) => {
    res.send({ descriptions });
});
app.post('/userPrompt', (req, res) => {
    const { nameFromUser } = req.body;
    res.send({ nameFromUser });
});
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
