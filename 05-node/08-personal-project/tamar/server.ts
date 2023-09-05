import express from "express";
const app = express();
const port = process.env.PORT || 3000;

//static files
app.use(express.static("PUBLIC"))

//body
app.use(express.json())

//routers
// get router from userRouter
import userRouter from "./API/users/userRoute";
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRouter)

//get router from recipesRoute


//listen port
app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
})