// import { multi } from "./cont/helpers"
// console.log("hi, I'm a server")
// console.log(multi(10, 6))

import express from "express";
const app = express();
// const port = 3001;

app.use(express.static('public'));
app.listen(3001, () => {
    console.log("Listen on the port 3001...");
});