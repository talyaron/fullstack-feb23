import express from "express"
const app = express()
const port = process.env.PORT || 3000

//interfaces:

interface _Task {
    title: string;
    description: string;
    status: string;
}

//static files
//app.use(express.static("public"))  //not yet created

//body
app.use(express.json())

//routers:
//to task:
//get:
import tasksRouter from "./API/tasks/tasksRouter"

//tells express to use this route on the initial rout "/API/tasks"
app.use("/API/tasks", tasksRouter)
