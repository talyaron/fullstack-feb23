import express from "express";
import mongoose from 'mongoose';
const app = express();
const port = process.env.PORT || 3000;



//static files
app.use(express.static("public"));

//body
app.use(express.json());

//connect to mongoDB with mongoose
mongoose.connect("mongodb+srv://tamar:Vxv7cpZuEp9uY1eZ@cluster0.85tiuhl.mongodb.net")

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
