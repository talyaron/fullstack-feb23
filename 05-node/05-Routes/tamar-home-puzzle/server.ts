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
//get router from taskRouter:
//get:
import tasksRouter from "./API/tasks/tasksRouter"

//tells express to use this route on the initial rout "/API/tasks"
app.use("/API/tasks", tasksRouter)

//get router from userRouter:
import usersRouter from "./API/users/usersRouter";
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", usersRouter)

app.listen(port, () => {
    console.log(`app listening on pors ${port}`)
})
