import express from "express";
const app = express()
import * as dotenv from "dotenv"
dotenv.config({path:__dirname + "/.env"})
const port = process.env.PORT || 5000;

console.log(process.env)
//get the html+ts files
app.use(express.static('public'));

//post
const myName = "Doriel";
const age = 29;
const description = "I'm a web enthusiast, pouring my energy into building captivating online experiences that fuse creativity and technology. \n Coding is my playground, and I relish the challenge of turning ideas into reality. With each line of code, I bring my passion for excellence to life, creating digital landscapes that are both functional and beautiful. Whether I'm fine-tuning software or crafting a website, my commitment to perfection is the driving force behind everything I do. \n In a world where technology evolves at lightning speed, I thrive on the excitement of learning and growing. I'm not just a QA Engineer and a web developer – I'm a relentless explorer of possibilities, eager to make my mark on the digital frontier. "

// Images
const imageOne = '/images/postmanTestResponse.jpg';
const imageTwo = '/images/RapidAPI.jpg';

//routes to get data from server
app.get('/firstName', (req: any, res: { send: (wrappererObj: { firstName: string }) => void; }) => {
    console.log('request to name')
    res.send({
        firstName: myName
    })
});

app.get('/myAge', (req, res: { send: (arg0: { myAge: number }) => void; }) => {
    console.log('request to age')
    res.send({ 
        myAge: age
    })
});

app.get('/myDescription', (req, res: { send: (arg0: { myDescription: string }) => void; }) => {
    console.log('request to description')
    res.send({ 
        myDescription: description
    })
});

app.get('/loadImages', (req, res: { send: (arg0: { imageOne: string; imageTwo: string }) => void; }) => {
    console.log('request to load images')
    res.send({ 
        imageOne: imageOne,
        imageTwo: imageTwo
    })
});

//close with a listener 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })