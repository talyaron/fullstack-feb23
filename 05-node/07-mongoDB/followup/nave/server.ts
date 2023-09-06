import express from "express";
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;



//static files
app.use(express.static("public"));

//body
app.use(express.json());

//connect to mongoDB with mongoose
mongoose.connect("mongodb+srv://vnavev:mDSAr2zEw0bzDM2a@cluster0.nzfjztb.mongodb.net/")
.then(()=>{
  console.info("MongoDB connected")
})
.catch(err=>{
  console.error(err)
})




//router to products

// get router from userRouter
import userRouter from "./API/users/userRouter";
//tells express to use userRouter on the intial route "/API/users"
app.use("/API/users", userRouter)

import tasksRouter from "./API/tasks/tasksRoutes";
app.use("/API/tasks", tasksRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});