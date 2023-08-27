"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: __dirname + "/.env" });
const port = process.env.PORT || 4999;
console.log(process.env);
//get the html+ts files
app.use(express_1.default.static('public'));
//post
let myName = "Doriel";
const age = 29;
const description = "I'm a web enthusiast, pouring my energy into building captivating online experiences that fuse creativity and technology. \n Coding is my playground, and I relish the challenge of turning ideas into reality. With each line of code, I bring my passion for excellence to life, creating digital landscapes that are both functional and beautiful. Whether I'm fine-tuning software or crafting a website, my commitment to perfection is the driving force behind everything I do. \n In a world where technology evolves at lightning speed, I thrive on the excitement of learning and growing. I'm not just a QA Engineer and a web developer – I'm a relentless explorer of possibilities, eager to make my mark on the digital frontier. ";
// Images
const imageOne = '/images/postmanTestResponse.jpg';
const imageTwo = '/images/RapidAPI.jpg';
//routes to get data from server
app.get('/firstName', (req, res) => {
    console.log('request to name');
    res.send({
        firstName: myName
    });
});
app.post('/updateFirstName', express_1.default.json(), (req, res) => {
    const newFirstName = req.body.firstName;
    myName = newFirstName;
    res.status(200).json({ message: 'First name updated successfully.', newFirstName });
});
app.get('/myAge', (req, res) => {
    console.log('request to age');
    res.send({
        myAge: age
    });
});
app.get('/myDescription', (req, res) => {
    console.log('request to description');
    res.send({
        myDescription: description
    });
});
app.get('/loadImages', (req, res) => {
    console.log('request to load images');
    res.send({
        imageOne: imageOne,
        imageTwo: imageTwo
    });
});
//close with a listener 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
