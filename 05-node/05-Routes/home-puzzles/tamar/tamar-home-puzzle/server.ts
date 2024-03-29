import express from "express"
const app = express()
const port = process.env.PORT || 3003

//static files
//app.use(express.static("public"))  //not yet created

//body
app.use(express.json())
app.use(express.static('public'))

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

//get router from userTaskRouter:
import userTaskRouter from "./API/userTasks/userTaskRouter";
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/userTasks", userTaskRouter)

app.listen(port, () => {
    console.log(`app listening on pors ${port}`)
})
