"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 3000;
app.use(express_1.default.static('public'));
app.use(express_1.default.json()); // Parse JSON request bodies
let receivedData = ''; // Define a variable to store received data
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.post('/sendData', (req, res) => {
    receivedData = req.body.data; // Store received data
    res.json({ message: 'Data received successfully!' });
});
app.get('/siteName', (req, res) => {
    res.send({ name: receivedData }); // Send stored data
});
