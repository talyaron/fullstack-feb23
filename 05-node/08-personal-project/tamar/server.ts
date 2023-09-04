import express from "express";
const app = express();
const port = process.env.PORT || 3000;

//static files
app.use(express.static("PUBLIC"))

//body
app.use(express.join())

//get routers



//listen port
app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
})