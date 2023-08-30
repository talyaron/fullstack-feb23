import express from 'express';
import { _Task } from './API/tasks/tasksModel';
const app = express()
const port = process.env.PORT || 3006;


// static files 
app.use(express.static('public'));
app.use(express.json()); // I need to add this if I want to get the (body: JSON.stringify(friend) //the req) 


// router to tasks
import tasksRouter from "./API/tasks/tasksRouter";
// tells express to use tasksRouter on the initial route "/API/tasks"
app.use("/API/tasks", tasksRouter)



app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
    
})